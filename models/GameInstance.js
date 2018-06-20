const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameInstance = new Schema({
  player: {type: Schema.Types.ObjectId, ref: 'User'},
  sentences: [],
  vocabUsed: [],
  playedAt: {type: Date, default: Date.now}
});

module.exports = GameInstance
