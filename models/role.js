const { Schema, model } = require('mongoose')

const RolSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre rol es requerido'],
        minLength: 1,
        unique: [true, 'Nombre rol repetido']
            //se debe cambiar para la elección de variables usuario/administrador//
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