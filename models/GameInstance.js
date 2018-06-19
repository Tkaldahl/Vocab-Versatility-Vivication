const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameInstance = new Schema({
  player: {type: Schema.ObjectId, ref: 'User'},
  sentences: [],
  vocabUsed: [{type: String, ref: 'Vocab'}],
  playedAt: {type: Date, default: Date.now}
});

module.exports = GameInstance
