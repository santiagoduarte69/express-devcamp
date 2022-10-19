const express = require('express')
const router = express.Router()

//Listar todos los bootcamps
router.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data": "aqui se van a mostrar todos los cursos"
        })
})

//listar un boomcamp por id
router.get('/:id', (req, res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Curso con Id: ${req.params.id}`
        })
})

//Crear un nuevo bootcamp
router.post('/' , (req , res)=>{
    res
        .status(201)
        .json({
            "success" : true,
            "data": "Agregar curso"
        })
})

//Actualizar un bootcamp por id
router.put('/:id' , (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Actualizar el curso: ${req.params.id}`
        })
})

//Eliminar un bootcamp por id
router.delete('/:id' , (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Eliminar el curso: ${req.params.id}`
        })
})

module.exports = router