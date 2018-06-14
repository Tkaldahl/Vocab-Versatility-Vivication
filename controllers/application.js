const { Vocab } = require('../models/index')

module.exports = {
  index: (req, res) => {
    Vocab.find({})
      // .sort({ createdAt: -1 })
      .limit(10)
      .populate('author')
      .then((vocabs, err) => {
        console.log({ vocabs })
        res.render('app/index', { vocabs })
      })
  }
}
