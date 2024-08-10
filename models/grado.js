const { Schema, model } = require('mongoose')

const GradoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        minLength: 1,
    },
    descripcion: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
    //Falta realizar variable de quien hizo la selección del grado//
})

module.exports = model('Grado', GradoSchema)