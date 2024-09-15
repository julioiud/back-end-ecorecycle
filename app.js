const express = require('express')
const { mongoConection } = require('./databases/config')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

mongoConection()

app.use(
    cors({
        origin: '*', // Solo permite solicitudes desde el frontend local
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

app.use('/api/v1/usuarios', usuarios)
app.use('/api/v1/codigos', codigos)
app.use('/api/v1/puntajes', puntajes)
app.use('/api/v1/canecas', canecas)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app