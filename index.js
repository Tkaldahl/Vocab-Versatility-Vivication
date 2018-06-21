var express = require('express')
var app = express()
var passport = require('passport')
var flash = require('connect-flash')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/local-authentication-with-passport');
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.set('view engine', 'hbs')

app.use(session({ secret: "Tay's Secret", resave: true, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./config/passport')(passport)

app.use(function (req, res, next) {
  global.currentUser = req.user
  res.locals.currentUser = req.user
  next()
})

app.use(require('./config/routes.js'))

app.set('port', process.env.port || 8000)
app.listen((process.env.PORT || 8000), () => console.log('app listening on port 8000'))
