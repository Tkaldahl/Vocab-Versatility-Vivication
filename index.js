var express = require('express')
var app = express()

app.set('view engine', 'hbs')

app.use(require('./routes/index.js'))

app.listen(8000, function () {
  console.log('app listening on port 8000')
})
