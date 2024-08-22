const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    tipoDocumento: {
        type: Schema.Types.ObjectId,
        ref: 'TipoDocumento',
        required: true
    },
    fechaNacimiento: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email ya existe']
    },
    contrasena: {
        type: String
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String 
    },
    grado: {
        type: Schema.Types.ObjectId,
        ref: 'Grado'
    },
    seccion: {
        type: Schema.Types.ObjectId,
        ref: 'Seccion'
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    },
    enabled : {
        type: Boolean,
        default: true
    },
    genero: {
        type: String // Enum
    }
})

module.exports = model('Usuario', UsuarioSchema)