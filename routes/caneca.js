const { Router } = require('express')
const { 
    obtenerCanecas,
    validarQRCaneca
} = require('../controllers/canecaController')
const { validarToken } = require('../middlewares/validatoken')

const router = Router()

router.get('/', [validarToken], obtenerCanecas)
router.get('/:info', [validarToken], validarQRCaneca)

module.exports = router