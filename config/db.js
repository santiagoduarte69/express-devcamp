const sequelize = require('./seq')
const colors = require('colors')

const connectDB = async () =>{
    try{
        await sequelize.authenticate()
        console.log('Conectado a servidor mysql'.bgGreen.blue)
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB