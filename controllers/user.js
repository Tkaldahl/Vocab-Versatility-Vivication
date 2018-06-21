const { User } = require('../models/index')
var passport = require('passport')
// const { GameInstance } = require('../models/index')
// var async = require('async')

// show User's profile page
function show (req, res) {
  User.findOne({ _id: req.params.id })
    .populate('gameInstances')
    .populate('writtenPosts')
    .then((user) => {
      console.log(user.gameInstances[0])
      res.render('user/show', { user })
    })
}

// take visitor to signup page
function getSignUp (req, res) {
  res.render('user/signup', { message: req.flash('signupMessage') })
}

// Post information back to the db after signing up
function postSignUp (req, res, next) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
  })
  return signupStrategy(req, res, next)
}

// take visitor to login page
function getLogin (req, res) {
  res.render('user/login', { message: req.flash('loginMessage') })
}

// Post the login information and authenticate
function postLogin (req, res, next) {
  var postLogin = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
  })
  return postLogin(req, res, next)
}

function logout (req, res) {
  req.logout()
  res.redirect('/')
}

function secret (request, response) {
  response.render('user/secret')
}
module.exports = {
  getSignUp: getSignUp,
  postSignUp: postSignUp,
  show: show,
  getLogin: getLogin,
  postLogin: postLogin,
  logout: logout,
  secret: secret
}
