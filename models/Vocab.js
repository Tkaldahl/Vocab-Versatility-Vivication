const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// make a new Vocab each round you play.
// const Vocab = {
//   sentence1: String,
//   sentence2: String,
//   sentence3: String,
//   sentence4: String,
//   sentence5: String,
//   sentence6: String,
//   sentence7: String,
//   sentence8: String,
//   sentence9: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   }
// }

const Vocab = {
  item: String
}

module.exports = {Vocab: mongoose.model('Vocab', Vocab)}
