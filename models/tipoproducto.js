const { Schema, model } = require('mongoose')

const TipoProductoSchema = Schema({
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
    }
})

module.exports = model('TipoProducto', TipoProductoSchema)