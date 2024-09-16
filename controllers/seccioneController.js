const Seccione = require('../models/seccione')

const obtenerSecciones = async (req = request, 
    res = response) => {
    try{
        const secciones = await Seccione.find()
        return res.json(secciones)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    obtenerSecciones
}