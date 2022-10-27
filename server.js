//1. Crear la depencia a express
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const listendpoints = require('express-list-endpoints')

//dependencias a las rutas
const BootcampRoutes = require('./routes/BootcampRoutes')
const CourseRoutes = require('./routes/CourseRoutes')
const UserRoutes = require('./routes/UserRoutes')

//Definiendo archivo . env
dotenv.config({
    path: './config/config.env'
})

//2. Crear el objeto app con express
const app = express()

//Habilitar express para tratar
//content-type json
app.use(express.json())

//Conectar a bd
connectDB()

//relacionar rutas de dominio
app.use('/app/v1/bootcamps' , BootcampRoutes)
app.use('/app/v1/courses' , CourseRoutes)
app.use('/app/v1/users' , UserRoutes)

//primera ruta de prueba
app.get('/' , ( request , response )=>{
    response.send('ruta funcionando')
})

//consultar endpoints del proyecto
console.log(listendpoints(app))

//3. Iniciar el devserver
app.listen(process.env.PORT , ()=>{
    console.log('servidor iniciado'.bgGreen.blue)
})