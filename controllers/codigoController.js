const Codigo = require('../models/codigo')
const Usuario = require('../models/usuario')
const Caneca = require('../models/caneca')
const ProductoValido = require('../models/productovalido')
const Puntaje = require('../models/puntaje')
const mongoose = require('mongoose');

const MAXIMO_BARRAS = 5

const toleranciaLatitud = 100/111320
/**
 * Registrar codigos de barras
 */
const registrarBarras = async (req = request, 
    res = response) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
        const codes = req.body
        const documento = req.uid
        const { qrCaneca, latitud, longitud, codigos = [] } = codes
        let codigo = {}

        // verificar si la caneca existe
        const canecaBD = await Caneca.findOne({infoQR : qrCaneca})
        if(!canecaBD){
            return res.status(400).json({msg: 'No existe caneca'})
        }
        codigo.caneca = {_id: canecaBD._id}

        // validar posicion
        const toleranciaLongitud = (100/78625) / (Math.cos(latitud * Math.PI / 180))

        if(Math.abs(latitud - canecaBD.latitud) > toleranciaLatitud ||
           Math.abs(longitud - canecaBD.longitud) > toleranciaLongitud) {
            return res.status(400).json({
                msj: 'Su ubicación no es correcta'
            })
        }
        
        const usuarioBD = await Usuario.findOne({documento})
        
        if(!usuarioBD){
            return res.status(400).json({msg: 'No existe usuario'})
        }
        codigo.usuario = { _id: usuarioBD._id}

        let guardados = 0
        for(let cod of codigos) {
            codigo.serial = cod.serial

            const barrsBD = await Codigo.find({serial: cod.serial})
            if(barrsBD.length >= MAXIMO_BARRAS){//TODO: PARAMETRIZAR SEGUN EL USUARIO
                console.log('Barra', codigo.serial, 'Muchas barras iguales!')
                continue;
            }
            
            codigo.descripcion = cod.descripcion

            // validamos producto y obtenemos su tipo
            let patron = ''
            //8 712000 900045
            if(cod.serial.length == 13){
                patron = cod.serial.slice(0, 7)
            }
            //08 712000 900045
            else if(cod.serial.length == 14){
                patron = cod.serial.slice(0, 8)
            }
            //008 712000 900045
            else if(cod.serial.length == 15){
                patron = cod.serial.slice(0, 9)
            }
            // porque hay 195 paises aprox. en el mundo
            const productoValidoBD = 
                await ProductoValido.findOne({ patron })
            
            if(!productoValidoBD) {
                console.log('Barra', codigo.serial, '¨No es válida')
                continue;
            }

            codigo.tipoProducto = productoValidoBD.tipoProducto

            const barra = new Codigo(codigo)
            
            await barra.save({ session })

            guardados++
        }
        // asignamos puntaje
        //if(guardados > 0) {// si fueron ceros, que lo registre de todos modos, como un intento fallido
            let puntaje = {}
            puntaje.puntos = guardados
            puntaje.usuario = codigo.usuario
            puntaje.caneca = codigo.caneca
            puntaje = new Puntaje(puntaje)
            await puntaje.save({ session })
        //}

        await session.commitTransaction();
        return res.status(201).json({
            completado: `${guardados}/${codigos.length}`,
            codes
        })
    } catch(e){
        console.log(e)
        await session.abortTransaction();
        return res.status(500).json({e})
    } finally{
        session.endSession();
    }
}

const validarBarra = async (req = request, 
    res = response) => {
    try{
        let valido = true
        let noreciclado = true
        const serial = String(req.params.serial)
        console.log(serial)
        const barrasDB = await Codigo.find({ serial })
        const len = serial.length
        if ( barrasDB.length >= MAXIMO_BARRAS) {//TODO: PARAMETRIZAR SEGUN EL USUARIO
            noreciclado = false
        }
        // validamos producto y obtenemos su tipo
        let patron = ''
        //8 712000 900045
        if(len == 13) {
          patron = serial.slice(0, 7)
        }
        //08 712000 900045
        else if(len == 14){
           patron = serial.slice(0, 8)
        }
         //008 712000 900045
        else if(len == 15){
           patron = serial.slice(0, 9)
        } else {
            valido = false
        }

        const productoValidoBD = 
            await ProductoValido.findOne({ patron })
                    
        if(!productoValidoBD) {
            valido = false
        }
        return res.json({
            valido,
            noreciclado
        })
    } catch(e){
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    registrarBarras, 
    validarBarra
}