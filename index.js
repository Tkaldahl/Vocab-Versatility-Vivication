var express = require('express');
var app = express();
var passport = require('passport');
var flash = require('connect-flash');

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/local-authentication-with-passport');

app.set('view engine', 'hbs');

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(require('./config/routes.js'));

app.set('port', process.env.port || 8000)
app.listen(app.get('port'), () => console.log('app listening on port 8000'))
