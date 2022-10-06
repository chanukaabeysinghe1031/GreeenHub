const router = require('express').Router()
const {addPost,getPosts,getPostsOfFarmer}  = require('../controllers/posts_controller')
router.post('/addPost',addPost)
router.post('/getPosts',getPosts)
router.post('/getPostsOfFarmer',getPostsOfFarmer)
module.exports =  router