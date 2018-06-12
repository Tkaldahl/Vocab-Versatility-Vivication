const mongoose = require('../db/connection')
const UserSchema = require('./User')
const VocabSchema = require('./Vocab')

module.exports = {
  User: mongoose.model('User', UserSchema),
  Vocab: mongoose.model('Vocab', VocabSchema)
}
