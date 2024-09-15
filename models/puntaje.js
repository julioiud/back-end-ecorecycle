const { Schema, model } = require('mongoose')

const PuntajeSchema = Schema({
    puntos: {
        type: Number
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    caneca: {
        type: Schema.Types.ObjectId,
        ref: 'Caneca'
    }
})

module.exports = model('Puntaje', PuntajeSchema)