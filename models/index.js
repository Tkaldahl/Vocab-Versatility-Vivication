const mongoose = require('../db/connection');
const UserSchema = require('./User');
const VocabSchema = require('./Vocab');
const GameInstanceSchema = require('./GameInstance');
const PostSchema = require('./Post');

module.exports = {
  User: mongoose.model('User', UserSchema),
  Vocab: mongoose.model('Vocab', VocabSchema),
  GameInstance: mongoose.model('GameInstance', GameInstanceSchema),
  Post: mongoose.model('Post', PostSchema)
}
