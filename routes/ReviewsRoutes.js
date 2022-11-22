const express = require('express')
const {getReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
} = require('../controllers/ReviewsController')

const router = express.Router()

router.route('/')
.get(getReviews)
.post(createReview)

router.route('/:id')
.get(getSingleReview)
.put(updateReview)
.delete(deleteReview)

module.exports = router