const { Schema, model } = require('mongoose')

const CodigoSchema = Schema({
    serial: {
        type: String,
        required: true,
        //unique: [true, 'Material ya reciclado'] --> no son únicas las barras
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
    caneca: {
        type: Schema.Types.ObjectId,
        ref: 'Caneca'
    },
    tipoProducto : {
        type: Schema.Types.ObjectId,
        ref: 'TipoProducto'
    }
})

module.exports = model('Codigo', CodigoSchema)