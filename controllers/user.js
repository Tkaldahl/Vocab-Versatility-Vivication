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
  res.render('/user/signup', { message: req.flash('signupMessage') });
}

// Post information back to the db after signing up
function postSignUp (req, res) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
}

// take visitor to login page
function login (req, res) {
  res.render('user/login')
}
module.exports = {
  getSignUp: getSignUp,
  postSignUp: postSignUp,
  show: show,
  login: login
}
