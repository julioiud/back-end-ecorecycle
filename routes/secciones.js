const { Router } = require('express')
const { 
    obtenerSecciones
} = require('../controllers/seccioneController')

const router = Router()

router.get('/', obtenerSecciones)

module.exports = router