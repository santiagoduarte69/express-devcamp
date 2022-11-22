const { DataTypes, ValidationError } = require('sequelize')
const BootcampModel = require('../models/bootcamp')
const sequelize = require('../config/seq')
//Objeto User:
const Bootcamp = BootcampModel(sequelize , DataTypes)

exports.getAllBootcamps = async (req, res)=>{
    try {
        const allBootcamps = await Bootcamp.findAll()
        res 
            .status(200)
            .json({
                "success" : true,
                "data": allBootcamps
        })
    } catch (error) {
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.getSingleBootcamp = async (req, res)=>{
         
    try {
         //Seleccionar bootcamp por id
         const singleBootcamp = await Bootcamp.findByPk(req.params.id)
         if(!singleBootcamp){
             res.status(400).json({
                 "success":false,
                 "errors": "Bootcamp no encontrado"
             })
         }else{
              //enviar response
             res 
             .status(200)
             .json({
                 "success" : true,
                 "data": singleBootcamp
             })
         }
    } catch (error) {
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.createBootcamp = async (req , res)=>{
    try {
        const newBootcamp = Bootcamp.create(req.body)
        res
            .status(201)
            .json({
                "success" : true,
                "data": newBootcamp
            })
    } catch (error) {
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

exports.updateBootcamp = async (req , res)=>{
    try {
        //Seleccionar bootcamp por id
        const singleBootcamp = await Bootcamp.findByPk(req.params.id)
        //Si no xiste
        if(!singleBootcamp){
            res.status(400).json({
                "success":false,
                "errors": "Bootcamp no encontrado"
            })
        }else{
            //Si existe, actualizo bootcamp
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Volvemos a seleccionar
            const updateBootcamp = await User.findByPk(req.params.id)
            //response con bootcamp actualizado
            res 
                .status(200)
                .json({
                    "success" : true,
                    "data": updateBootcamp
                })
        }
    } catch (error) {
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.deleteBootcamp = async (req , res)=>{
    try {
         //Seleccionar bootcamp por id
         const singleBootcamp = await Bootcamp.findByPk(req.params.id)
         //Si no xiste
         if(!singleBootcamp){
             res.status(400).json({
                 "success":false,
                 "errors": "bootcamp no encontrado"
             })
         }else{
             //Si existe, actualizo bootcamp
             await User.destroy( {
                 where: {
                     id: req.params.id
                 }
               })
             //Volvemos a seleccionar
             const deleteBootcamp = await Bootcamp.findByPk(req.params.id)
             //response con bootcamp actualizado
             res 
                 .status(200)
                 .json({
                     "success" : true,
                     "data": deleteBootcamp
                 })
         }
    } catch (error) {
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}