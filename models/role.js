const { Schema, model } = require('mongoose')

const RoleSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre rol es requerido'],
        minLength: 1,
        unique: [true, 'Nombre repetido']
    },
    descripcion: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
})

module.exports = model('Role', RoleSchema)