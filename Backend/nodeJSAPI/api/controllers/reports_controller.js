const Comments = require("../models/comments");
const Farmer = require("../models/farmer");
const Report = require("../models/report");
const Posts = require("../models/posts");

exports.addReport=  async  (req,res) => {
    const {postId,commentId,comment,reason} = req.body

    if(postId===""&&commentId===""&&comment===""&&reason){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        Posts.findById(postId)
            .then(post=>{
                const newReport = new Report({
                    postId,
                    commentId,
                    post,
                    comment,
                    reason
                })

                newReport.save()
                    .then(responseReport => {
                        res.json({
                            Status: "Successful",
                            Message: 'Report has been added successfully.',
                            comment: responseReport
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        res.json({
                            Status: "Unsuccessful",
                            Message: "Happened saving the  report in " +
                                "DB.",
                            error: error.Message
                        })
                    })
            })
            .catch(error=>{
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened finding the post in " +
                        "DB.",
                    error: error.Message
                })
            })
    }
}

exports.getReports = (req,res) => {
    Report.find()
        .then(reports=>{
            res.json({
                "Status":"Successful",
                "Reports": reports
            })
        })
        .catch(error=>{
            res.json({
                Status: "Unsuccessful",
                Message: "Happened while getting the  reports from " +
                    "DB.",
                error: error.Message
            })
        })
}


