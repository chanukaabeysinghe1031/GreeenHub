const router = require('express').Router()
const {addComment,getComments, rateComment}  = require('../controllers/comments_controller')
router.post('/addComment',addComment)
router.post('/getComments',getComments)
router.post('/rateComment',rateComment)
module.exports =  router