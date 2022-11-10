const { DataTypes, ValidationError  } = require('sequelize')
const CourseModel = require('../models/course')
const sequelize = require('../config/seq')
//Objeto User:
const Course = CourseModel(sequelize , DataTypes)

exports.getAllCourses = async (req, res)=>{
    try{
        const allCourses = await Course.findAll()
        res 
            .status(200)
            .json({
                "success" : true,
                "data": allCourses
            })
        }catch(error){
            res.status(400).json({
                "success":false,
                "error": "Error de servidor"
            })
        }
}

exports.getSingleCourse = async (req, res)=>{
    try{
        //Seleccionar course por id
        const singleCourse = await Course.findByPk(req.params.id)
        if(!singleCourse){
            res 
                .status(200)
                .json({
                    "success" : false,
                    "data": "Course no encontrado"
                })
        }else{
            //enviar response
            res 
            .status(200)
            .json({
                "success" : true,
                "data": singleCourse
            })
        }
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.createCourse = async (req , res)=>{
    try {
        const newCourse = await Course.create(req.body)
        res
            .status(201)
            .json({
                "success" : true,
                "data": newCourse
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

exports.updateCourse = async (req , res)=>{
    try {
        //Seleccionar usuario por id
        const singleCourse = await Course.findByPk(req.params.id)
        //Si no xiste
        if(!singleCourse){
            res.status(400).json({
                "success":false,
                "errors": "Course no encontrado"
            })
        }else{
            //Si existe, actualizo course
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Volvemos a seleccionar
            const updateCourse = await Course.findByPk(req.params.id)
            //response con usuario actualizado
            res 
            .status(200)
            .json({
                "success" : true,
                "data": updateCourse
            })
        }
    }catch(error){
        res.status(400).json({
            "success":false,
            "error": "Error de servidor"
        })
    }
}

exports.deleteCourse = async (req , res)=>{
    try {
        //Seleccionar usuario por id
        const singleCourse = await Course.findByPk(req.params.id)
        //Si no xiste
        if(!singleCourse){
            res.status(400).json({
                "success":false,
                "errors": "Course no encontrado"
            })
        }else{
            //Si existe, actualizo course
            await Course.destroy( {
                where: {
                    id: req.params.id
                }
            })
            //Volvemos a seleccionar
            const deleteCourse = await Course.findByPk(req.params.id)
            //response con usuario actualizado
            res 
                .status(200)
                .json({
                    "success" : true,
                    "data": deleteCourse
                })
            }
        } catch (error) {
            res.status(400).json({
                "success":false,
                "error": "Error de servidor"
            })
        }
}