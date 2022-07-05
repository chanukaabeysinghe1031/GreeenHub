const Comments = require('../models/comments')

// ************************* To add a post **************************
exports.addComment=  async  (req,res) => {
    const {farmerId,farmerName,postId,comment} = req.body

    if(farmerId==""||farmerName===""||postId===""||comment==""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        const comment = new Comments({
            farmerName,
            farmerId,
            postId,
            comment
        })

        comment.save()
            .then(responseComment => {
                res.json({
                    Status: "Successful",
                    Message: 'Post has been added successfully.',
                    comment: responseComment
                })
            })
            .catch(error => {
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
    Comments.find()
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