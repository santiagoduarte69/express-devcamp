const { DataTypes } = require('sequelize')
const BootcampModel = require('../models/bootcamp')
const sequelize = require('../config/seq')
//Objeto User:
const Bootcamp = BootcampModel(sequelize , DataTypes)

exports.getAllBootcamps = async (req, res)=>{
    const allBootcamps = await Bootcamp.findAll()
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allBootcamps
        })
}

exports.getSingleBootcamp = async (req, res)=>{
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleBootcamp
        })
}

exports.createBootcamp = async (req , res)=>{
    const newBootcamp = await Bootcamp.create(req.body)
    res
        .status(201)
        .json({
            "success" : true,
            "data": newBootcamp
        })
}

exports.updateBootcamp = async (req , res)=>{
    const updateBootcamp = await Bootcamp.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleBootcamp
        })
}

exports.deleteBootcamp = async (req , res)=>{
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    await Bootcamp.destroy( {
        where: {
            id: req.params.id
        }
      });
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleBootcamp
        })
}