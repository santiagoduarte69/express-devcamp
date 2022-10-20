const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017'

//Componente funcional 
const connectDB = async () =>{
    const conn = await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log(conn.connection.host)
}

connectDB()