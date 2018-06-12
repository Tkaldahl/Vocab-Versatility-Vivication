const mongoose = require('mongoose')
const Schema = mongoose.Schema

// make a new Vocab each round you play.
// const Vocab = {
//   word1: {
//     word: String,
//     sentence1: String,
//     sentence4: String,
//     sentence7: String
//   },
//   word1: {
//     word: String,
//     sentence2: String,
//     sentence5: String,
//     sentence8: String
//   },
//   word1: {
//     word: String,
//     sentence3: String,
//     sentence6: String,
//     sentence9: String
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   }
// }

const VocabSchema = {
  sentence: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
}

module.exports = VocabSchema
