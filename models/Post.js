const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  content: String,
  author: {type: Schema.ObjectId, ref: 'User'},
  public: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now},
  starterVocab: {type: Schema.ObjectId, ref: 'Vocab'}
})

module.exports = Post
