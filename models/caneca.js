const { Schema, model } = require('mongoose')

const CanecaSchema = Schema({
    ubicacion: {
        type: String,
        required: [true, 'Ubicacion es requerida'],
        minLength: 1,
        unique: [true, 'Ubicación repetida']
    },
    latitud: {
        type: Number
    },
    longitud: {
        type: Number
    },
    descripcion: {
        type: String
    },
    infoQR: {
        type: String
    }
})

module.exports = model('Caneca', CanecaSchema)