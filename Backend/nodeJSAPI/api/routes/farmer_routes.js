const router = require('express').Router()
const {addUser, signin, addFarmer}  = require('../controllers/farmer_controller')
router.post('/addFarmer',addFarmer)
router.post('/loginFarmer',signin)
module.exports =  router