const express = require('express')
const Router = express.Router()

//Listar todos los bootcamps
Router.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data": "aqui se van a mostrar todos los bootcamps"
        })
})

//listar un boomcamp por id
Router.get('/:id', (req, res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Bootcamp con Id: ${req.params.id}`
        })
})

//Crear un nuevo bootcamp
Router.post('/' , (req , res)=>{
    res
        .status(201)
        .json({
            "success" : true,
            "data": "Agregar bootcamp"
        })
})

//Actualizar un bootcamp por id
Router.put('/:id' , (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Actualizar el bootcamp: ${req.params.id}`
        })
})

//Eliminar un bootcamp por id
Router.delete('/:id' , (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Eliminar el bootcamp: ${req.params.id}`
        })
})

module.exports = Router