const User = require('../models/User')
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

// User.find({}).remove(() => {
//   Vocab.find().remove(() => {
//     User.create({
//       local: {
//         email: 'test@example.com',
//         password: createPassword('password')
//       }
//     }).then((userObject) => {
//       Vocab.create({
//         sentence: 'vocab sentence',
//         author: userObject._id
//       }).then(v => {
//         userObject.sentences.push(v)
//         userObject.save((err) => console.error(err))
//       })
//     })
//   })
// })
