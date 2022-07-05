const router = require('express').Router()
const {addPost,getPosts}  = require('../controllers/posts_controller')
router.post('/addPost',addPost)
router.get('/getPosts',getPosts)
module.exports =  router