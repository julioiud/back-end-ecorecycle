const { Router } = require('express')
const { 
    registrarBarras, 
    validarBarra
} = require('../controllers/codigoController')
const { validarToken } = require('../middlewares/validatoken')

const router = Router()

router.post('/', [validarToken], registrarBarras)
router.get('/:serial', [validarToken], validarBarra)

module.exports = router