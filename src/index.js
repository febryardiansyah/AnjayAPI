const express = require('express');
const searchRoute = require('./routes/searchRoute');
const mangaRoute = require('./routes/mangaRoute');
const genreRoute = require('./routes/genreRoute');
const IndexRoute = express();
const router = express.Router()

router.use(searchRoute)
router.use(mangaRoute)
router.use(genreRoute)

IndexRoute.use('/api/v1',router);

module.exports = IndexRoute;