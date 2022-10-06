const mongoose = require('mongoose')
const reportsSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    commentId:{
        type:String,
        required:true
    },
    post:{
        type:{farmerId:{
                type:String,
                required:true
            },
            farmerName:{
                type:String,
                required:true
            },
            title: {
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            category: {
                type: String,
                required: true
            },
            image:{
                type:String,
                required:true
            },
            recordedDate: {
                type: Date,
                default : Date.now()
            }},
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    recordedDate: {
        type: Date,
        default : Date.now()
    }
})


module.exports = mongoose.model('Reports',reportsSchema)