/*const { Schema, model } = require('mongoose')

const CodigoUsuarioSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    codigo : {
        type: Schema.Types.ObjectId,
        ref: 'Codigo',
        required: true
    },
    caneca: {
        type: Schema.Types.ObjectId,
        ref: 'Caneca',
        required: true
    },
    fechaAlmacenamiento: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('CodigoUsuario', CodigoUsuarioSchema)*/