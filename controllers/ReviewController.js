const { DataTypes } = require('sequelize')
const ReviewModel = require('../models/review')
const sequelize = require('../config/seq')
//Objeto Review:
const Review = ReviewModel(sequelize , DataTypes)

exports.getAllReviews = async (req, res)=>{
    const allReviews = await Review.findAll()
    res 
        .status(200)
        .json({
            "success" : true,
            "data": allReviews
        })
}

exports.getSingleReview = async (req, res)=>{
    const singleReview = await Review.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleReview
        })
}

exports.createReview =  async (req , res)=>{
    const newReview = await Review.create(req.body)
    res
        .status(201)
        .json({
            "success" : true,
            "data": newReview
        })
}

exports.updateReview = async (req , res)=>{
    await Review.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const singleReview = await Review.findByPk(req.params.id)
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleReview
        })
}

exports.deleteReview = async (req , res)=>{
    const singleReview = await Review.findByPk(req.params.id)
    await Review.destroy( {
        where: {
            id: req.params.id
        }
      });
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleReview
        })
}