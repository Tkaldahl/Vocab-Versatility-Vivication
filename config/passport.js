var LocalStrategy = require('passport-local').Strategy
var Index = require('../models/index')

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, callback) {
    Index.User.findById(id, function (err, user) {
      callback(err, user)
    })
  })

  // Authenticate Signup
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, callback) {
    // Find a user with this e-mail
    Index.User.findOne({ 'local.email': email })
      .then((user) => {
        if (user) {
          return callback(null, false, req.flash('signupMessage', 'This email is already used.'))
        } else {
          // Create a new user
          var newUser = new Index.User()
          // newUser.username = username
          newUser.local.email = email
          newUser.local.password = newUser.encrypt(password)

          newUser.save(function (err) {
            if (err) throw err
            return callback(null, newUser)
          })
        }
      })
  }
  ))

  // Authenticate Login
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function (req, email, password, callback) {
    console.log('authenticating')
    Index.User.findOne({ 'local.email': email }, function (err, user) {
      if (err) return callback(err)
      if (!user) return callback(null, false, req.flash('loginMessage', 'No user found'))
      if (!user.validPassword(password)) return callback(null, false, req.flash('loginMessage', 'Ooops, wrong password'))
      return callback(null, user)
    })
  }))
}
