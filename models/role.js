const { Schema, model } = require('mongoose')

const RolSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        minLength: 1, //se debe cambiar para la elección de variables usuario/administrador//
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
})

module.exports = model('Rol', RolSchema)