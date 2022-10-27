const express = require('express')
const { getAllCourses,
        getSingleCourse,
        updateCourse,
        deleteCourse,
        createCourse } = require('../controllers/CourseController')

const Router = express.Router()

Router.route('/')
      .get(getAllCourses)
      .post(createCourse)

Router.route('/:id')
      .get(getSingleCourse)
      .put(updateCourse)
      .delete(deleteCourse)

module.exports = Router