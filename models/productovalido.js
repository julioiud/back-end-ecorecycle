const { Schema, model, set } = require('mongoose')

const ProductoValidoSchema = Schema({
    serial: {
        type: Number,
    },
    patron: {
        type: set
    },
})

module.exports = model('ProductoValido', ProductoValidoSchema)