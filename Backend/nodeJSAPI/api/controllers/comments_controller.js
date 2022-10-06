const Comments = require('../models/comments')
const Farmer = require('../models/farmer')
const {add} = require("nodemon/lib/rules");

// ************************* To add a comment **************************
exports.addComment=  async  (req,res) => {
    const {farmerId,farmerName,postId,addedComment} = req.body

    if(farmerId==""||farmerName===""||postId===""||addedComment==""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        const newComment = new Comments({
            farmerName,
            farmerId,
            postId,
            comment:addedComment,
            rate:0,
            numberOfReviews:0
        })

        newComment.save()
            .then(responseComment => {
                Farmer.findById(farmerId)
                    .then(farmer=>{
                        const newNumberOfComments = farmer.noComments+1;
                        farmer.noComments = newNumberOfComments;
                        farmer.save()
                            .then(farmerSavedResponse=>{
                                res.json({
                                    Status: "Successful",
                                    Message: 'Comment has been added successfully.',
                                    comment: responseComment
                                })
                            })
                            .catch(err=>{
                                res.json({
                                    Status: "Unsuccessful",
                                    Message: "Happened updating the number of comments of farmer in " +
                                        "DB.",
                                    error: err.Message
                                })
                            })
                    })
                    .catch(err=>{
                        res.json({
                            Status: "Unsuccessful",
                            Message: "Happened  searching for the  farmer in " +
                                "DB.",
                            error: err.Message
                        })
                    })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened saving the  comment in " +
                        "DB.",
                    error: error.Message
                })
            })
    }
}

// ************************* To get comments **************************
exports.getComments = async (req,res) =>{
    const {postId} = req.body
    if(postId===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        Comments.find({postId:postId})
            .then(comments=>{
                res.json({
                    "Status":"Successful",
                    "Comments": comments
                })
            })
            .catch(error=>{
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened searching for the  comment in " +
                        "DB.",
                    error: error.Message
                })
            })
    }
}

// ************************* To add a rate for a comment **************************
exports.rateComment = async  (req,res) => {
    const {commentId,farmerId,rate} = req.body;
    if(commentId===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        Comments.findById(commentId)
            .then(comment=>{
                let numberOfReviews = comment.numberOfReviews
                comment.rate = (comment.rate*numberOfReviews+rate)/(numberOfReviews+1);
                comment.numberOfReviews  = numberOfReviews+1
                comment.save()
                    .then(updatedCommentResult=>{
                        res.json({
                            "Status":"Successful",
                            "Comments": updatedCommentResult
                        })
                    })
                    .catch(err=>{
                        console.log(err)
                        res.json({
                            Status: "Unsuccessful",
                            Message: "Happened saving the  comment in " +
                                "DB.",
                            error: err.Message
                        })
                    })
            })
            .catch(error=>{
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened searching for the  comment in " +
                        "DB.",
                    error: error.Message
                })
            })
    }
}