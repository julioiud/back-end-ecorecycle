const { Schema, model } = require('mongoose')

const ProductoValidoSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial es requerido'],
        minLength: 1,
        unique: [true, 'Serial repetido']
    },
    patron: {
        type: String
    },
    tipoProducto : {
        type: Schema.Types.ObjectId,
        ref: 'TipoProducto'
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
})

module.exports = model('ProductoValido', ProductoValidoSchema)