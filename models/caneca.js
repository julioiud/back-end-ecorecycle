const { Schema, model } = require('mongoose')

const CanecaSchema = Schema({
    ubicacion: {
        latitud: {
            type: Number
        },
        longitud: {
            type: Number
        }
    },
    descripcion: {
        type: String
    },
    informacionQR: {
        type: String
    },
})

module.exports = model('Caneca', CanecaSchema)