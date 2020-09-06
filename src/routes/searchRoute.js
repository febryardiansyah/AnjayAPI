const express = require('express')
const searchController = require('../controllers/searchController')
const searchRoute = express()
const router = express.Router()

router.get('/search/:query/page/:page',searchController.search)

searchRoute.use(router)

module.exports = searchRoute