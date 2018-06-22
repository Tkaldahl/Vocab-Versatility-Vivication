const bcrypt = require('bcrypt-nodejs')
const Index = require('../models/index') // We only need index because we route all models through index as well as the db connection

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

// First, we create 3 vocab words using the Vocab model
Index.Vocab.find({}).remove(() => {
  Index.Vocab.create({
    word: 'Magnificent',
    definition: 'Adjective: Stunningly beautiful, elaborate, or extravagant; striking',
    length: 11,
    difficulty: 3
  })
  Index.Vocab.create({
    word: 'Indignant',
    definition: 'Adjective: Feeling or showing anger or annoyance at what is perceived as unfair treatment',
    length: 9,
    difficulty: 3.5
  })
  Index.Vocab.create({
    word: 'Ineffable',
    definition: 'Adjective: Too great to be expressed in words. Like this website!'
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
  Index.Vocab.create({
    word: 'Nefarious',
    definition: 'Adjective: Wicked, villainous, despicable'
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
  Index.Vocab.create({
    word: 'Mellifluous',
    definition: 'Adjective: A sound that is sweet and smooth, pleasing to hear'
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
  Index.Vocab.create({
    word: 'Stoke',
    definition: 'Verb: To stir up or excite'
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
  Index.Vocab.create({
    word: 'Ethereal',
    definition: 'Adjective: Extremely delicate, light, in a way too perfect for this world'
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
  Index.Vocab.create({
    word: 'Ephemeral',
    definition: 'Adjective: Lasting for a very short time'
  }).then((vocabAdded) => {
    vocabAdded.save((err) => console.error(err))
  })
})

// Second, we create a test user using the User model
Index.User.find({}).remove(() => {
  Index.GameInstance.find({}).remove(() => {
    Index.Post.find({}).remove(() => {
      Index.User.create({
        local: {
          email: 'test@example.com',
          password: createPassword('password')
        },
        username: 'Tester'
      }).then((newUserAdded) => {
        newUserAdded.save((err) => console.error(err))
        testerId = newUserAdded._id
        // Third, with the test user created, that user creates a GameInstance using the GameInstance model
        Index.GameInstance.create({
          sentences1: 'magnificent sentence',
          sentences2: 'indignant sentence',
          sentences3: 'stoke sentence',
          sentences4: 'magnificent sentence 2',
          sentences5: 'indignant sentence 2',
          sentences6: 'stoke sentence 2',
          player: testerId,
          vocabUsed: ['magnificent', 'indignant', 'stoke']
        }).then((gameInstanceAdded) => {
          gameInstanceAdded.save((err) => console.error(err))
          gameId = gameInstanceAdded._id
        }).then(() => {
          // Fourth, we attach the full player details to the gameinstance using populate method
          Index.User.findOne({ _id: `${testerId}` })
            .exec(function (err, selectedUserObject) {
              if (err) return console.error(err)
              selectedUserObject.gameInstances.push(gameId)
              selectedUserObject.save((err) => console.error(err))
              // console.log(selectedUserObject)
            })
        })
        // Fifth our user writes a post
        Index.Post.create({
          content: 'The nimble fox jumped over the lazy dog',
          author: testerId,
          vocabUsed: ['magnificent']
        }).then((postAdded) => {
          postAdded.save((err) => console.error(err))
          postId = postAdded._id
        }).then(() => {
          // Sixth, we attach the full player details to the Post using populate method
          Index.User.findOne({ _id: `${testerId}` })
            .exec(function (err, selectedUserObject) {
              if (err) return console.error(err)
              selectedUserObject.writtenPosts.push(postId)
              selectedUserObject.save((err) => console.error(err))
              // console.log(selectedUserObject)
            })
        })
      })
    })
  })
})

var gameId = null
var postId = null
var testerId = null
