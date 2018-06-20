const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')

router.route('/')
  .get(applicationController.index)

router.route('/user/signup')
  .get(userController.getSignUp)
  .post(userController.postSignUp)

router.route('/user/login')
  .get(userController.login)

router.route('/user/:id')
  .get(userController.show)

module.exports = router
