const { Router } = require('express')
const { 
    obtenerPuntajesporUsuario,
    obtenerPuntajeporUsuario
} = require('../controllers/puntajeController')
const { validarToken } = require('../middlewares/validatoken')

const router = Router()

router.get('/', [validarToken], obtenerPuntajesporUsuario)

router.get('/puntos', [validarToken], obtenerPuntajeporUsuario)

module.exports = router