const User = require('../models/User')
const Vocab = require('../models/Vocab')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null) 

User.find().remove(() => {
  Vocab.find().remove(() => {
    User.create({
      local: {
        email: 'test@example.com',
        password: createPassword('password')
      }
    }).then((userObject) => {
      Vocab.create({
        sentence: 'vocab sentence',
        author: userObject._id
      }).then(v => {
        userObject.sentences.push(v)
        userObject.save((err) => console.error(err))
      })
    })
  })
})
