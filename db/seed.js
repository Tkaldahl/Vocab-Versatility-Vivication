// const User = require('../models/User')
// const Vocab = require('../models/Vocab')
const bcrypt = require('bcrypt-nodejs')
const Index = require('../models/index')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

Index.Vocab.find({}).remove(() => {
  Index.Vocab.create({
    word: 'magnificent',
    definition: 'impressively beautiful, elaborate, or extravagant; striking.',
    length: 11,
    difficulty: 3
  })
  Index.Vocab.create({
    word: 'indignant',
    definition: 'feeling or showing anger or annoyance at what is perceived as unfair treatment.',
    length: 9,
    difficulty: 3.5
  })
  Index.Vocab.create({
    word: 'stoke',
    definition: 'to stir up or excite',
    length: 5,
    difficulty: 3
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
})

Index.User.find({}).remove(() => {
  Index.GameInstance.find({}).remove(() => {
    // var vocab = null // we will use this variable to pass values into GameInstance.vocabUsed
    Index.User.create({
      local: {
        email: 'test@example.com',
        password: createPassword('password')
      },
      username: 'Tester'
    }).then((newUser) => {
      Index.GameInstance.create({
        sentences: ['magnificent sentence 1', 'indignant sentence 1', 'stoke sentence 1', 'magnificent sentence 2', 'indignant sentence 2', 'stoke sentence 2', 'magnificent sentence 3', 'indignant sentence 3', 'stoke sentence 3'],
        player: newUser._id
      }).then((newGameInstance) => {
        // console.log(newGameInstance.vocabUsed)
        Index.Vocab.find()
          .where('word').equals('magnificent').select('word')
          .exec(function (err, vocab) {
            if (err) return console.error(err)
            // newGameInstance.vocabUsed.push(vocab)
            // newGameInstance.vocabUsed.push(vocab[0].word)
            console.log(vocab[0]._id)
            newGameInstance.vocabUsed.push(vocab[0].word)
            console.log(newGameInstance)
          })
      })
    })
  })
})

// // newUser.vocabUsed.push(Index.Vocab.findOne({'word': 'magnificent'}))
//       // newUser.save((err) => console.error(err))
//       console.log(Index.Vocab.find({'word': 'magnificent'}), 'word', function (err, vocabWord) {
//         if (err) {
//           return console.error(err)
//         } else {
//           console.log(vocabWord)
//         }
//       })
