const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    email: {type: String, req: true},
    password: {type: String, req: true}
  },
  gameInstances: [
    {type: Schema.Types.ObjectId, ref: 'GameInstance'}
  ],
  writtenPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  image: {type: String, default: 'http://www.colonialkc.org/wp-content/uploads/2015/07/placeholder_square.jpg'},
  username: {type: String, min: 3, max: 25, req: true}
})

module.exports = User
