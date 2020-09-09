const express = require('express')
const { SearchController } = require('../controllers')
const searchRoute = express()
const router = express.Router()

router.get('/search/:query/page/:page',SearchController.search)

searchRoute.use('/',router)

module.exports = searchRoute