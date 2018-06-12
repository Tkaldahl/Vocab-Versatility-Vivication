const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get('/create', userController.create)
router.get('/:id', userController.show)

module.exports = router
