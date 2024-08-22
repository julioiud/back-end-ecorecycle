const { Schema, model } = require('mongoose')

const CodigoSchema = Schema({
    serial: {
        type: String,
        unique: [true, 'Material ya reciclado']
    },
    descripcion: {
        type: String
    },
    fechaAlmacenamiento: {
        type: Date,
        default: new Date()
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipoProducto : {
        type: Schema.Types.ObjectId,
        ref: 'TipoProducto'
    }
})

module.exports = model('Codigo', CodigoSchema)