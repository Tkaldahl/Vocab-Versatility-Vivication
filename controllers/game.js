const Index = require('../models/index')

function getGame (req, res) {
  res.render('gamePage/vocabGame', { message: req.flash('gameSavedMessage') })
}

function postGame (req, res) {
  Index.GameInstance.create({
    player: req.user._id,
    sentences1: req.body.sentence1.content,
    sentences2: req.body.sentence2.content,
    sentences3: req.body.sentence3.content,
    sentences4: req.body.sentence4.content,
    sentences5: req.body.sentence5.content,
    sentences6: req.body.sentence6.content,
    sentences7: req.body.sentence7.content,
    sentences8: req.body.sentence8.content,
    sentences9: req.body.sentence9.content
  }).then(game => {
    req.user.gameInstances.push(game)
    req.user.save(err => {
      req.flash('gameSavedMessage', 'Your game was saved! Play another round or head to your profile page to review!')
      res.redirect(`/ViciousVocab`)
    })
  })
}

module.exports = {
  getGame: getGame,
  postGame: postGame
}
