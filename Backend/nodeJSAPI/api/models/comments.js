const mongoose = require('mongoose')
const commentsSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    farmerName:{
        type:String,
        required:true
    },
    farmerId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    recordedDate: {
        type: Date,
        default : Date.now()
    },
    rate:{
        type:Number,
        required:false
    },
    numberOfReviews:{
        type:Number,
        required:false
    }
})


module.exports = mongoose.model('Comments',commentsSchema)