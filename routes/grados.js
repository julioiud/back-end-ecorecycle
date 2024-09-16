const { Router } = require('express')
const { 
    obtenerGrados
} = require('../controllers/gradoController')

const router = Router()

router.get('/', obtenerGrados)

module.exports = router