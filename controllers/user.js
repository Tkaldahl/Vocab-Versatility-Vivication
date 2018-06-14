const { User } = require('../models/index')

// show main page
function show (req, res) {
  User.findOne({ _id: req.params.id })
    .populate({
      path: 'sentences'
    })
    .then((user) => {
      res.render('user/show', { user })
    })
}

// take visitor to signup page
function signUp (req, res) {
  res.render('user/signup')
}

// take visitor to login page
function login (req, res) {
  res.render('user/login')
}
module.exports = {
  signUp: signUp,
  show: show,
  login: login
}
