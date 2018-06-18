const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameInstance = new Schema({
  Player: {type: Schema.ObjectId, ref: 'User'},
  sentences: [],
  vocabUsed: [{type: Schema.ObjectId, ref: 'Vocab'}],
  playedAt: {type: Date, default: Date.now}
});

module.exports = GameInstance
