const { DataTypes, ValidationError } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//Objeto User:
const User = UserModel(sequelize , DataTypes)

exports.getAllUsers = async (req, res)=>{
    try{
        const allUsers = await User.findAll()
        res 
            .status(200)
            .json({
                "success" : true,
                "data": allUsers
        })
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.getSingleUser = async (req, res)=>{
    try{
        //Seleccionar usuario por id
        const singleUser = await User.findByPk(req.params.id)
        if(!singleUser){
            res.status(400).json({
                "success":false,
                "errors": "Usuario no encontrado"
            })
        }else{
             //enviar response
            res 
            .status(200)
            .json({
                "success" : true,
                "data": singleUser
            })
        }
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.createUser =  async (req , res)=>{
    try {
        const newUser = await User.create(req.body)
        res
            .status(201)
            .json({
                "success" : true,
                "data": newUser
            })
    }catch(error) {
        if(error instanceof ValidationError) {
            //Recorrer el arreglo de errores:
            //map
            const msg_errores=error.errors.map(errorItem=>errorItem.message)

            res.status(422).json({
                "success":false,
                "error": msg_errores
            })
        }else{
            res.status(400).json({
                "success":false,
                "error": "Error de servidor"
            })
        }
    }
}

exports.updateUser = async (req , res)=>{
    try {
        //Seleccionar usuario por id
        const singleUser = await User.findByPk(req.params.id)
        //Si no xiste
        if(!singleUser){
            res.status(400).json({
                "success":false,
                "errors": "Usuario no encontrado"
            })
        }else{
            //Si existe, actualizo usuario
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Volvemos a seleccionar
            const updateUser = await User.findByPk(req.params.id)
            //response con usuario actualizado
            res 
                .status(200)
                .json({
                    "success" : true,
                    "data": updateUser
                })
        }
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.deleteUser = async (req , res)=>{
    try {
        //Seleccionar usuario por id
        const singleUser = await User.findByPk(req.params.id)
        //Si no xiste
        if(!singleUser){
            res.status(400).json({
                "success":false,
                "errors": "Usuario no encontrado"
            })
        }else{
            //Si existe, actualizo usuario
            await User.destroy( {
                where: {
                    id: req.params.id
                }
              })
            //Volvemos a seleccionar
            const deleteUser = await User.findByPk(req.params.id)
            //response con usuario actualizado
            res 
                .status(200)
                .json({
                    "success" : true,
                    "data": deleteUser
                })
        }
    } catch (error) {
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}