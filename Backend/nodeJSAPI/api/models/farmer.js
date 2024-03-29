const mongoose = require('mongoose')
const farmerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    noPosts:{
        type:Intl,
        required:false,
        default:0
    },
    noComments:{
        type:Intl,
        required:false,
        default:0
    }
})


module.exports =  mongoose.model('Farmers',farmerSchema)