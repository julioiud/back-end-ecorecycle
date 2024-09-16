const express = require('express')
const { mongoConection } = require('./databases/config')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

mongoConection()

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite métodos
        allowedHeaders: ['Content-Type', 'Authorization', 'token'], // Cabeceras permitidas
        credentials: true
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const usuarios = require('./routes/usuarios')
const codigos = require('./routes/codigo')
const puntajes = require('./routes/puntaje')
const canecas = require('./routes/caneca')
const tiposdoc = require('./routes/tipodocumento')
const grados = require('./routes/grados')
const secciones = require('./routes/secciones')

app.use('/api/v1/usuarios', usuarios)
app.use('/api/v1/codigos', codigos)
app.use('/api/v1/puntajes', puntajes)
app.use('/api/v1/canecas', canecas)
app.use('/api/v1/tiposdoc', tiposdoc)
app.use('/api/v1/grados', grados)
app.use('/api/v1/secciones', secciones)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app