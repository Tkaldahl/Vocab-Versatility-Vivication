const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    email: String,
    password: String
  },
  sentences: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vocab'
    }
  ]
})

module.exports = User
