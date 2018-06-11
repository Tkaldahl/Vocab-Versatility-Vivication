const { Vocab } = require('../models/Vocab')

module.exports = {
  index: (req, res) => {
    Vocab.find({})
      .populate('item')
      .then(vocab => {
        res.render('app/index', { vocab })
      })
  }
}
