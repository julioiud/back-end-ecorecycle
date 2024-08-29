const Puntaje = require('../models/puntaje')

/**
 *  Consulta Puntaje por su usuario
 */
const obtenerPuntajeporUsuario = async (req = request, 
    res = response) => {
    try{
        const uid = req.uid
        const puntajeDB = await Puntaje
        .find()
        .populate({
            path: 'usuario',
            match: { documento: uid },
            select: '_id nombre documento email'
        })
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