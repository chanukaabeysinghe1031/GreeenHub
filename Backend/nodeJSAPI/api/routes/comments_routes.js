const router = require('express').Router()
const {addComment,getComments}  = require('../controllers/comments_controller')
router.post('/addComment',addComment)
router.get('/getComments',getComments)
module.exports =  router