const mongoose = require('mongoose')
const diseaseDetectingRecordSchema = new mongoose.Schema({
    farmerId:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    recordedDate: {
        type: Date,
        default : Date.now()
    },
    detectedDisease:{
        type:String,
        required:true
    }
})


module.exports =  mongoose.model('DiseaseDetectionRecords',diseaseDetectingRecordSchema)