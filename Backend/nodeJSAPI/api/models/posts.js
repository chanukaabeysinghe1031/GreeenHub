const mongoose = require('mongoose')
const postsSchema = new mongoose.Schema({
    farmerId:{
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
    },
})


module.exports = mongoose.model('Posts', postsSchema)