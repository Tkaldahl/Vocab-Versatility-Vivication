const Index = require('../models/index')

function index (req, res) {
  Index.Vocab.count().exec(function (err, count) {
    if (err) return console.error(err)
    var randomNumber = Math.floor(Math.random() * count)
    Index.Vocab.findOne().skip(randomNumber)
      .then((vocab, err) => {
        res.render('app/index', { vocab })
      })
  })
}

function postPost (req, res) {
  // Our user makes a sentence on the homepage and we want to add it to their user data, then render it on their profile page
  var postText = req.body.post.content
  // var vocabUsed = req.body.vocabWord
  // console.log(req.body.vocabWord)
  var currentUserId = req.user._id
  // console.log(currentUserId)
  // var postId = null
  // Make the Post using the values on the page and tie the author to the current user
  Index.Post.create({
    content: postText,
    author: currentUserId
    // vocabUsed: vocabUsed
  }).then(post => {
    req.user.writtenPosts.push(post)
    req.user.save(err => {
      res.redirect(`/user/${req.user._id}`)
    })
  })
}

function requireAuth (req, res, next) {
  // console.log(req.user._id)
  if (req.isAuthenticated()) {
    // console.log(req.user._id)
    next()
  } else {
    res.redirect('/')
  }
}
module.exports = {
  index: index,
  postPost: postPost,
  requireAuth: requireAuth
}
