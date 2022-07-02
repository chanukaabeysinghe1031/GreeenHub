const router = require('express').Router()
const {addUser, signin}  = require('../controllers/user_controller')
router.post('/addUser',addUser)
router.post('/login',signin)
module.exports =  router