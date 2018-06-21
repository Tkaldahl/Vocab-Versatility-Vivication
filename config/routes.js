const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')
const gameController = require('../controllers/game')

router.use((req, res, next) => {
  res.locals.currentUser = req.user
  // console.log(req)
  next()
})

function authenticatedUser (req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next()

  // Otherwise the request is always redirected to the home page
  res.redirect('/')
}

router.route('/')
  .get(applicationController.index)
  .post(applicationController.requireAuth, applicationController.postPost)

router.route('/ViciousVocab')
  .get(gameController.show)

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
