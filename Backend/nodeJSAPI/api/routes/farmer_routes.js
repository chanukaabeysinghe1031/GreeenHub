const router = require('express').Router()
const {addUser, signin, addFarmer,refresh}  = require('../controllers/farmer_controller')
router.post('/addFarmer',addFarmer)
router.post('/loginFarmer',signin)
router.post('/refreshFarmer',refresh)
module.exports =  router