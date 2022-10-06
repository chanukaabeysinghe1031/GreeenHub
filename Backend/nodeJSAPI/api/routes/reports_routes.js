const router = require('express').Router()
const {addReport,getReports,deleteReport, deleteComment}  = require('../controllers/reports_controller')
router.post('/addReport',addReport)
router.get('/getReports',getReports)
router.post('/deleteReport',deleteReport)
router.post('/deleteComment',deleteComment)
module.exports =  router