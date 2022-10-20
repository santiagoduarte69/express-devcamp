const express = require('express')
const { getAllBootcamps,
        getSingleBootcamp,
        updateBootcamp,
        deleteBootcamp,
        createBootcamp } = require('../controllers/BootcampController')

const Router = express.Router()

Router.route('/')
      .get(getAllBootcamps)
      .post(createBootcamp)

Router.route('/:id')
      .get(getSingleBootcamp)
      .put(updateBootcamp)
      .delete(deleteBootcamp)

module.exports = Router