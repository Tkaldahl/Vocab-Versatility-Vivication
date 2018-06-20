const { Vocab } = require('../models/index')

module.exports = {
  index: (req, res) => {
    Vocab.count().exec(function (err, count) {
      if (err) return console.error(err)
      var randomNumber = Math.floor(Math.random() * count)

      Vocab.findOne().skip(randomNumber)
        .then((vocab, err) => {
          res.render('app/index', { vocab })
        })
    })
  }
}
