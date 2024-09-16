const Usuario = require('../models/usuario')
const Role = require('../models/role')
const TipoDocumento = require('../models/tipodocumento')
const { request, response } = require('express')
const bcryptjs = require('bcryptjs')
const { generarJWT } = require('../utils/generar-token')
const Seccione = require('../models/seccione')
const Grado = require('../models/grado')

/**
 * Registrar un usuario mediante formulario
 */
const registrarUsuario = async (req = request, 
    res = response) => {
    try{
        const { email, contrasena, role, tipoDocumento, documento, ...data } = req.body
        const usuario = new Usuario({ email, contrasena, tipoDocumento, documento, ...data })

        // encriptar password
        const salt = bcryptjs.genSaltSync()
        usuario.contrasena = bcryptjs.hashSync(contrasena, salt)
        usuario.enabled = true
       
        const usuarioBD = await Usuario.findOne({
            $or: [
              { email },
              { documento}
            ]
          })
        if(usuarioBD){
            return res.status(400).json({msg: 'Ya existe usuario'})
        }
        const rolBD = await Role.findOne({ nombre: 'ROLE_NORMAL' })
        usuario.role = { _id: rolBD._id}
        usuario.fechaCreacion = new Date()
        const tipoDocBD = await TipoDocumento.findOne({ _id: tipoDocumento._id })
        if(!tipoDocBD){
            return res.status(400).json({msg: 'No existe tipo documento'})
        }
        console.log(usuario)
        await usuario.save()
        return res.status(201).json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
}

/**
 * Autenticarse al sistema y obtener token
 */
const login = async (req = request, 
    res = response) => {
    try{
        const { email, contrasena } = req.body
        const usuarioBD = await Usuario
        .findOne({email, enabled: true})
        .populate({
            path: 'role',
            select: '_id nombre descripcion'
        })
        .populate({
            path: 'grado',
            select: 'nombre'
        })
        .populate({
            path: 'seccione',
            select: 'nombre'
        })
        if(!usuarioBD){
            return res.status(401).json({msg: 'No existe usuario'})
        }
        if(!usuarioBD.enabled){
            return res.status(401).json({msg: 'Usuario deshabilitado'})
        }
        const contrasenaEsValida = bcryptjs.compareSync(contrasena, usuarioBD.contrasena)
        if(!contrasenaEsValida) {
            return res.status(401).json({msg: 'Credenciales incorrectas'})
        }

        const token = await generarJWT(usuarioBD.documento)

        return res.status(200).json({
            usuarioBD,
            token
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
}


/**
 *  Consulta un usuario por su ID
 */

const obtenerUsuario = async (req = request, 
    res = response) => {
    try{
        const uid = req.uid
        const usuarioDB = 
            await Usuario
            .findOne({ documento: uid})
            .populate({
                path: 'tipoDocumento',
                select: '_id nombre descripcion'
            })
            .populate({
                path: 'grado',
                select: '_id nombre'
            })
            .populate({
                path: 'seccione'
            })
            .populate({
                path: 'role',
                select: '_id nombre descripcion'
            })
        if(!usuarioDB.enabled){
          return res.status(401).json({msg: 'Usuario deshabilitado'})
        }
        return res.json(usuarioDB)
    }catch(e){
        return res.status(500).json({msj: 'Error de Backend'})
    }
}
/**
 * Actualiza un usuario por su ID
 
const updateUsuarioByID = async (req = request, 
    res = response) => {
    try{
        const id = req.params.id
        const data = req.body
        console.log(data)
        console.log(id)
        data.fechaActualizacion = new Date()
        console.log(data)
        const usuario = await Usuario.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(usuario)
    }catch(e){
        return res.status(500).json({msj: e})
    }  
}*/


module.exports = { 
    registrarUsuario, 
    login,
    obtenerUsuario, 
   /* getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID*/
}