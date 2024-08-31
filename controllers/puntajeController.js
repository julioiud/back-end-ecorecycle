const Puntaje = require('../models/puntaje')
const usuario = require('../models/usuario')
const Usuario = require('../models/usuario')
/**
 *  Consulta Puntaje por su usuario
 */
const obtenerPuntajeporUsuario = async (req = request, 
    res = response) => {
    try{
        const uid = req.uid
        const usuarioBD = await Usuario.findOne({ documento: uid})
        const puntajeDB = await Puntaje
        .findOne({usuario : usuarioBD})
        .populate({
            path: 'caneca',
            select: '_id ubicacion infoQR'
        })
        return res.json(puntajeDB)
    }catch(e){
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    obtenerPuntajeporUsuario, 
}