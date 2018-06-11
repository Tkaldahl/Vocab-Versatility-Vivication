const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myAppDb')
mongoose.Promise = Promise
module.exports = mongoose