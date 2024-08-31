const { Router } = require('express')
const { 
    registrarUsuario, 
    login,
    obtenerUsuario
    /*
    getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID*/
} = require('../controllers/usuarioController')
const { validarToken } = require('../middlewares/validatoken')

// TODO: IMPLEMENTAR express-validation

const router = Router()

/**
 * Crea un usuario
 */
router.post('/', registrarUsuario)

router.post('/login', login)

/**
 * Consulta todos los usuarios

router.get('/', getUsuarios) */

/**
 *  Consulta un usuario por su ID
*/
router.get('/perfil', [validarToken], obtenerUsuario) 

/**
 * Actualiza un usuario por su ID

router.put('/:id', updateUsuarioByID) */

/**
 * Borra un usuario por su ID

router.delete('/:id', deleteUsuarioByID) */

module.exports = router
