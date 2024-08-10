const { Schema, model } = require('mongoose')

const SeccionSchema = Schema({
    nombreseccion: {
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
    },
    //Falta variable quien lo hizo//
})

module.exports = model('Seccion', SeccionSchema)