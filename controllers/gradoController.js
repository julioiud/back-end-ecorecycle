const Grado = require('../models/grado')

const obtenerGrados = async (req = request, 
    res = response) => {
    try{
        const grados = await Grado.find()
        return res.json(grados)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    obtenerGrados
}