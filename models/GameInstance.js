const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameInstance = new Schema({
  player: {type: Schema.Types.ObjectId, ref: 'User'},
  sentences1: String,
  sentences2: String,
  sentences3: String,
  sentences4: String,
  sentences5: String,
  sentences6: String,
  sentences7: String,
  sentences8: String,
  sentences9: String,
  vocabUsed: [],
  playedAt: {type: Date, default: Date.now}
});

module.exports = GameInstance
