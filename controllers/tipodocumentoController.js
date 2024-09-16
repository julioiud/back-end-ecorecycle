const TipoDocumento = require('../models/tipodocumento')

const obtenerTiposDocumento = async (req = request, 
    res = response) => {
    try{
        const tiposDocumento = await TipoDocumento.find()
        return res.json(tiposDocumento)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    obtenerTiposDocumento
}