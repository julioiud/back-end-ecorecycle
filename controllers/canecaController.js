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

module.exports = { 
    obtenerCanecas
}