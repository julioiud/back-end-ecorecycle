const { Router } = require('express')
const { 
    obtenerPuntajeporUsuario
} = require('../controllers/puntajeController')
const { validarToken } = require('../middlewares/validatoken')

const router = Router()

router.get('/', [validarToken], obtenerPuntajeporUsuario)

module.exports = router