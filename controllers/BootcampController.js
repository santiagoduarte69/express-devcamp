exports.getAllBootcamps = (req, res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `All bootcamps`
        })
}

exports.getSingleBootcamp = (req, res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Single bootcamp ${req.params.id}`
        })
}

exports.createBootcamp = (req , res)=>{
    res
        .status(201)
        .json({
            "success" : true,
            "data": "Create bootcamp"
        })
}

exports.updateBootcamp = (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Update bootcamp ${req.params.id}`
        })
}

exports.deleteBootcamp = (req , res)=>{
    res 
        .status(200)
        .json({
            "success" : true,
            "data": `Delete bootcamp: ${req.params.id}`
        })
}