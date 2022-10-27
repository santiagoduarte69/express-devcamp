const { DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//Objeto User:
const User = UserModel(sequelize , DataTypes)

exports.getAllUsers = async (req, res)=>{
    const allUsers = await User.findAll()
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allUsers
        })
}

exports.getSingleUser = async (req, res)=>{
    const singleUser = await User.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}

exports.createUser =  async (req , res)=>{
    const newUser = await User.create(req.body)
    res
        .status(201)
        .json({
            "success" : true,
            "data": newUser
        })
}

exports.updateUser = async (req , res)=>{
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}

exports.deleteUser = async (req , res)=>{
    const singleUser = await User.findByPk(req.params.id)
    await User.destroy( {
        where: {
            id: req.params.id
        }
      });
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}