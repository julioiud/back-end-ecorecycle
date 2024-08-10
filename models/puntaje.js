const { Schema, model } = require('mongoose')

const PuntajeSchema = Schema({
    Puntos: {
        type: Number,
    },
    fechaPuntos: {
        type: Date,
        default: new Date()
    }
    //Falta variables de quién son//
})

module.exports = model('Puntaje', PuntajeSchema)