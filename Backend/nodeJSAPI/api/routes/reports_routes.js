const router = require('express').Router()
const {addReport,getReports}  = require('../controllers/reports_controller')
router.post('/addReport',addReport)
router.get('/getReports',getReports)
module.exports =  router