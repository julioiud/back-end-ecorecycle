const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    tipoDocumento: {
        type: Schema.Types.ObjectId,
        ref: 'TipoDocumento',
        required: true
    },
    documento: {
        type: String,
        required: true,
        unique: [true, 'Documento ya existe']
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
    seccione: {
        type: Schema.Types.ObjectId,
        ref: 'Seccione'
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
        type: String, // Enum
        enum: ["M", "F", "O", "N"],
        default: "N"
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }
})

module.exports = model('Usuario', UsuarioSchema)