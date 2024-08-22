const { Schema, model } = require('mongoose')

const TipoDocumentoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
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
    // quien lo creo
})

module.exports = model('TipoDocumento', TipoDocumentoSchema)