const { Router } = require('express')
const { 
    obtenerTiposDocumento
} = require('../controllers/tipodocumentoController')

const router = Router()

router.get('/', obtenerTiposDocumento)

module.exports = router