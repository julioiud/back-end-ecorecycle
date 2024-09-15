const Puntaje = require('../models/puntaje')
const usuario = require('../models/usuario')
const Usuario = require('../models/usuario')
/**
 *  Consulta Puntajes por su usuario
 */
const obtenerPuntajesporUsuario = async (req = request, 
    res = response) => {
    try{
        const uid = req.uid
        const usuarioBD = await Usuario.findOne({ documento: uid})
        let puntajeDB = []
        puntajeDB = await Puntaje
        .find({usuario : usuarioBD})
        .populate({
            path: 'caneca',
            select: '_id ubicacion infoQR'
        })
        console.log(puntajeDB)
        return res.json(puntajeDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: e})
    }
}

/**
 *  Consulta Puntaje por su usuario
 */
const obtenerPuntajeporUsuario = async (req = request, 
    res = response) => {
    try{
        const uid = req.uid
        const usuarioBD = await Usuario.findOne({ documento: uid})
        let puntajeDB = []
        puntajeDB = await Puntaje
            .find({usuario : usuarioBD})
            const totalPuntos = puntajeDB.reduce((acumulador, actual) => acumulador + actual.puntos, 0)
        return res.json(totalPuntos ? {puntos: totalPuntos } : {puntos: 0})
    }catch(e){
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    obtenerPuntajesporUsuario, 
    obtenerPuntajeporUsuario
}