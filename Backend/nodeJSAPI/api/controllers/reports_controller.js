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

exports.deleteReport = (req,res) => {
    const {reportId} = req.body
    if(reportId===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else {
        Report.findByIdAndDelete(reportId)
            .then(report=>{
                res.json({
                    "Status":"Successful",
                    "Report": report
                })
            })
            .catch(error=>{
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened while deleting the  report from " +
                        "DB.",
                    error: error.Message
                })
            })
    }
}

exports.deleteComment = (req,res) => {
    const {reportId,commentId} = req.body
    if(reportId===""&&commentId===""){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else {
        Comments.findByIdAndDelete(commentId)
            .then(comment=>{
                Report.findByIdAndDelete(reportId)
                    .then(report=>{
                        res.json({
                            "Status":"Successful",
                            "Report": report
                        })
                    })
                    .catch(error=>{
                        res.json({
                            Status: "Unsuccessful",
                            Message: "Happened while deleting the  report from " +
                                "DB.",
                            error: error.Message
                        })
                    })
            })
            .catch(err=>{
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened while deleting the  comment from " +
                        "DB.",
                    error: err.Message
                })
            })
    }
}


