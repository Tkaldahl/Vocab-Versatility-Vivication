const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const User = new Schema({
  local: {
    email: {type: String, req: true},
    password: {type: String, req: true}
  },
  image: {type: String, default: 'http://www.colonialkc.org/wp-content/uploads/2015/07/placeholder_square.jpg'},
  // username: {type: String, min: 3, max: 25, req: true},
  gameInstances: [
    {type: Schema.Types.ObjectId, ref: 'GameInstance'}
  ],
  writtenPosts: [
    {type: Schema.Types.ObjectId, ref: 'Post'
    }
  ]
})

User.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = User
