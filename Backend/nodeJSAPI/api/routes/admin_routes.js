const router = require('express').Router()
const {signin}  = require('../controllers/admin_controller')
router.post('/loginAdmin',signin)
module.exports =  router