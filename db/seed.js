const User = require('../models/User')
const { Vocab } = require('../models/Vocab')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Vocab.find({}).remove(() => {
    let bugs = User.create({
      local: {
        email: 'bugsbunny@gmail.com',
        password: createPassword('bugsbunny')
      }
    }).then(user => {
      Promise.all([
        Vocab.create({
          sentence: "eh, what's up doc?",
          author: user._id
        }).then(vocab => {
          user.vocabs.push(vocab)
        }),
        Vocab.create({
          sentence: "That's all, folks!",
          author: user._id
        }).then(vocab => {
          user.vocabs.push(vocab)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })

    let daffy = User.create({
      local: {
        email: 'daffyduck@gmail.com',
        password: createPassword('daffyduck')
      }
    }).then(user => {
      Promise.all([
        Vocab.create({
          sentence: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(vocab => {
          user.vocabs.push(vocab)
        }),
        Vocab.create({
          sentence: "You're dethpicable.",
          author: user._id
        }).then(vocab => {
          user.vocabs.push(vocab)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })

    let elmer = User.create({
      local: {
        email: 'elmerfudd@gmail.com',
        password: createPassword('elmerfudd')
      }
    }).then(user => {
      Promise.all([
        Vocab.create({
          sentence:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id
        }).then(vocab => {
          user.vocabs.push(vocab)
        }),

        Vocab.create({
          sentence: 'Kiww da wabbit!',
          author: user._id
        }).then(vocab => {
          user.vocabs.push(vocab)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })
  })
})
