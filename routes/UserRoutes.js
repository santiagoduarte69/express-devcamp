const express = require('express')
const { getAllUsers,
        getSingleUser,
        updateUser,
        deleteUser,
        createUser } = require('../controllers/UserController')

const Router = express.Router()

Router.route('/')
      .get(getAllUsers)
      .post(createUser)

Router.route('/:id')
      .get(getSingleUser)
      .put(updateUser)
      .delete(deleteUser)

module.exports = Router