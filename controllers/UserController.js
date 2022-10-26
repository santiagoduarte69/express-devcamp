const { DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//Objeto User:
const User = UserModel(sequelize , DataTypes)

exports.getAllUsers = async (req, res)=>{
    const allUsers = await User.findAll()
    console.log(allUsers)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allUsers
        })
}

exports.getSingleUser = (req, res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Single User ${req.params.id}`
        })
}

exports.createUser = (req , res)=>{
    res
        .status(201)
        .json({
            "success" : true,
            "data": "Create User"
        })
}

exports.updateUser = (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Update User ${req.params.id}`
        })
}

exports.deleteUser = (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Delete User: ${req.params.id}`
        })
}