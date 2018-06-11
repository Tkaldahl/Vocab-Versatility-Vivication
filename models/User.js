const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    email: String,
    password: String
  },
  vocab: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vocab'
    }
  ]
})

module.exports = mongoose.model('User', User)
