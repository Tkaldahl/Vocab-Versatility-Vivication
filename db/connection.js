const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/vocabDb')
mongoose.Promise = Promise
module.exports = mongoose
