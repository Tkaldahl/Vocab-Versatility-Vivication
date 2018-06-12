const { User } = require('../models/index')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
    //   .populate({
    //     path: 'sentences'
    //   })
      .then((user) => {
        res.render('user/show', { user })
      })
  },
  create: (req, res) => {
    res.render('user/create')
  }
}
