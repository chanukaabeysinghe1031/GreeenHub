const DiseaseDetectionRecords= require('../models/diseaseDitectionRecord')
const request = require('request-promise')
const Farmer = require("../models/farmer");
const bcrypt = require("bcryptjs");


PYTHON_FLASK_API_URL = "http://127.0.0.1:5000/"
// ************************* To predict body fat **************************
// exports.detectDisease= async (req,res) => {
//     const {
//         farmerId
//     } = req.body
//
//     if(farmerId===""||req.file===null||farmerId===null){
//         res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
//     }else{
//         // Take the prediction for the body fat level from the flask api
//         console.log(req.file.filename)
//         const options = {
//             method: 'POST',
//             uri: PYTHON_FLASK_API_URL+"predictDisease",
//             body: {
//                 "image":req.file.filename
//             },
//             json: true,
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         request(options)
//             .then(function (response){
//                 let dataFromFlaskAPI = JSON.stringify(response)
//                 dataFromFlaskAPI= JSON.parse(dataFromFlaskAPI)
//                 dataFromFlaskAPI = dataFromFlaskAPI.PredictedDisease
//                 console.log(dataFromFlaskAPI)
//
//                 const newRecord  = new DiseaseDetectionRecords({
//                     farmerId,
//                     image:req.file.path,
//                     DetectedDisease:dataFromFlaskAPI
//                 })
//                 newRecord.save()
//                     .then(result=>{
//                         res.json({
//                             Status: "Successful",
//                             Message: 'Record  has been saved successfully.',
//                             Prediction : dataFromFlaskAPI
//                         })
//                     })
//                     .catch(error=>{
//                         res.json({
//                             Status: "Unsuccessful",
//                             Message: "Happened while saving the body fat record in the DB.",
//                             error: error
//                         })
//                     })
//             })
//             .catch(function (err) {
//                 res.json({
//                     Status: "Unsuccessful",
//                     Message: "Happened while sending the request to Flask API",
//                     error: err
//                 })
//             })
//     }
// }

// ****************************** To login to a user account ******************************
exports.detectDisease= async (req, res) => {
        const {
        farmerId
    } = req.body

    if(farmerId===""||req.file===null||farmerId===null){
        res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else {
        // Take the prediction for the body fat level from the flask api
        console.log(req.file.filename)
        const options = {
            method: 'POST',
            uri: PYTHON_FLASK_API_URL+"predictDisease",
            body: {
                "image":req.file.filename
            },
            json: true,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        request(options)
            .then(function (response) {
                let dataFromFlaskAPI = JSON.stringify(response)
                dataFromFlaskAPI = JSON.parse(dataFromFlaskAPI)
                dataFromFlaskAPI = dataFromFlaskAPI.PredictedDisease
                console.log(dataFromFlaskAPI)

                const newRecord = new DiseaseDetectionRecords({
                    farmerId,
                    image: req.file.path,
                    detectedDisease: dataFromFlaskAPI
                })
                newRecord.save()
                    .then(result => {
                        res.json({
                            Status: "Successful",
                            Message: 'Record  has been saved successfully.',
                            Prediction: dataFromFlaskAPI
                        })
                    })
                    .catch(error => {
                        res.json({
                            Status: "Unsuccessful",
                            Message: "Happened while saving the body fat record in the DB.",
                            error: error
                        })
                    })
            })
            .catch(function (err) {
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened while sending the request to Flask API",
                    error: err
                })
            })
    }

}
