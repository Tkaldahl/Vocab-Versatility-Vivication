const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application.js')

router.get('/', applicationController.index)

// router.get('/', function (req, res) {
//   res.send('Hello World')
// })

module.exports = router
