const Posts = require('../models/posts')
const Farmer = require("../models/farmer");

// ************************* To add a post **************************
exports.addPost =  async  (req,res) => {
    const {farmerId,farmerName,title,description, category,image} = req.body

    if(farmerId==""||farmerName===""||title===""||description===""||category===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        const post = new Posts({
            farmerName,
            farmerId,
            title,
            description,
            category,
            image
        })

        post.save()
            .then(responsePost => {
                Farmer.findById(farmerId)
                    .then(farmer=>{
                        const newNumberOfPosts = farmer.noPosts+1
                        farmer.noPosts = newNumberOfPosts
                        farmer.save()
                            .then(farmerSavedResponse=>{
                                res.json({
                                    Status: "Successful",
                                    Message: 'Comment has been added successfully.',
                                    comment: responsePost
                                })
                            })
                            .catch(err=>{
                                res.json({
                                    Status: "Unsuccessful",
                                    Message: "Happened updating the number of posts of farmer in " +
                                        "DB.",
                                    error: err.Message
                                })
                            })
                    })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened saving the  post in " +
                        "DB.",
                    error: error.Message
                })
            })
    }
}

exports.getPosts = async (req,res) =>{

    const {category} = req.body
    if(category===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        Posts.find({category:category})
            .then(posts=>{
                res.json({
                    "Status":"Successful",
                    "Posts": posts
                })
            })
            .catch(error=>{
                res.json({
                    "Status":"Unsuccessful",
                    "Error": error
                })
            })
    }
}

exports.getPostsOfFarmer = async (req,res) =>{

    const {farmerId} = req.body
    if(farmerId===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        Posts.find({farmerId:farmerId})
            .then(posts=>{
                res.json({
                    "Status":"Successful",
                    "Posts": posts
                })
            })
            .catch(error=>{
                res.json({
                    "Status":"Unsuccessful",
                    "Error": error
                })
            })
    }
}