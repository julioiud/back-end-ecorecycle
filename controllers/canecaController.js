const Caneca = require('../models/caneca')

const obtenerCanecas = async (req = request, 
    res = response) => {
    try{
        const canecasDB = await Caneca.find()
        return res.json(canecasDB)
    }catch(e){
        return res.status(500).json({msj: e})
    }
}

const validarQRCaneca = async (req = request, 
    res = response) => {
    try{
        let existe = false
        const infoQR = String(req.params.info)
        const canecasDB = await Caneca.findOne({infoQR})
        if(canecasDB) {
            existe = true
        }
        return res.json({existe})
    }catch(e){
        return res.status(500).json({msj: e})
    }
}

module.exports = { 
    obtenerCanecas,
    validarQRCaneca
}