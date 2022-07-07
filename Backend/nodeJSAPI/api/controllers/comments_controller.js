const Comments = require('../models/comments')
const {add} = require("nodemon/lib/rules");

// ************************* To add a post **************************
exports.addComment=  async  (req,res) => {
    const {farmerId,farmerName,postId,addedComment} = req.body

    if(farmerId==""||farmerName===""||postId===""||addedComment==""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        const newComment = new Comments({
            farmerName,
            farmerId,
            postId,
            comment:addedComment
        })

        newComment.save()
            .then(responseComment => {
                res.json({
                    Status: "Successful",
                    Message: 'Comment has been added successfully.',
                    comment: responseComment
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
                    "Status":"Unsuccessful",
                    "Error": error
                })
            })
    }
}