const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')

function authenticatedUser (req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next()

  // Otherwise the request is always redirected to the home page
  res.redirect('/')
}

router.route('/')
  .get(applicationController.index)

router.route('/user/signup')
  .get(userController.getSignUp)
  .post(userController.postSignUp)

router.route('/user/login')
  .get(userController.getLogin)
  .post(userController.postLogin)

router.route('/logout')
  .get(userController.logout)

router.route('/user/:id')
  .get(userController.show)

router.route('/secret')
  .get(authenticatedUser, userController.secret)

module.exports = router
