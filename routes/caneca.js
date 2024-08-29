const { Router } = require('express')
const { 
    obtenerCanecas
} = require('../controllers/canecaController')
const { validarToken } = require('../middlewares/validatoken')

const router = Router()

router.get('/', [validarToken], obtenerCanecas)

module.exports = router