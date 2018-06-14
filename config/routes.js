const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')

router.route('/')
  .get(applicationController.index)

router.route('/user/signup')
  .get(userController.signUp)

router.route('/user/:id')
  .get(userController.show)

router.route('user/login')
  .get(userController.login)

module.exports = router
