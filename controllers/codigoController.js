const Codigo = require('../models/codigo')
const Usuario = require('../models/usuario')
const Caneca = require('../models/caneca')
const ProductoValido = require('../models/productovalido')
const Puntaje = require('../models/puntaje')
/**
 * Registrar codigos de barras
 */
const registrarBarras = async (req = request, 
    res = response) => {
    try{
        const codes = req.body
        const documento = req.uid
        const { caneca, latitud, longitud, codigos = [] } = codes
        let codigo = {}
        
        // verificar si la caneca existe
        const canecaBD = await Caneca.findOne({infoQR : caneca})
        if(canecaBD){
            return res.status(400).json({msg: 'Ya existe caneca'})
        }
        codigo.caneca = caneca
        // validar posicion
        if(Math.abs(latitud - canecaBD.latitud) > 0.00008987 ||
           Math.abs(longitud - canecaBD.longitud) > 0.0001269) {
            return res.status(400).json({
                msj: 'Su ubicación no es correcta'
            })
        }
        
        const usuarioBD = await Usuario.findOne({documento})
        if(!usuarioBD){
            return res.status(400).json({msg: 'No existe usuario'})
        }
        codigo.usuario = { _id: usuarioBD._id}

        guardados = 0
        for(let cod of codigos) {
            codigo.serial = cod.serial

            const barrBD = await Codigo.findOne({serial: cod.serial})
            if(barrBD){
                console.log('Barra', codigo.serial, 'ya fue reciclada!')
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
            guardados++
            await barra.save()
        }
        // asignamos puntaje
        let puntaje = {}
        puntaje.puntos = guardados
        puntaje.usuario = { _id: usuarioBD._id}
        puntaje.caneca = caneca
        puntaje = new Puntaje(puntaje)
        await puntaje.save()
        return res.status(201).json({
            completado: `${guardados}/${codigos.length}`,
            codes
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
}

const validarBarra = async (req = request, 
    res = response) => {
    try{
        const valido = true
        const noreciclado = true
        const serial = req.params.serial
        const barraDB = await Codigo.findOne({serial})
        if(barraDB) {
            noreciclado = false
        }
        // validamos producto y obtenemos su tipo
        let patron = ''
        //8 712000 900045
        if(serial.length == 13){
          patron = serial.slice(0, 7)
        }
        //08 712000 900045
        else if(serial.length == 14){
           patron = serial.slice(0, 8)
        }
         //008 712000 900045
        else if(serial.length == 15){
           patron = serial.slice(0, 9)
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
    }catch(e){
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    registrarBarras, 
    validarBarra
}