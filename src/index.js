const express = require('express');
const searchRoute = require('./routes/searchRoute');
const mangaRoute = require('./routes/mangaRoute');
const genreRoute = require('./routes/genreRoute');
const detailRoute = require('./routes/detailMangaRoute')
const IndexRoute = express();
const router = express.Router()

router.use(searchRoute)
router.use(mangaRoute)
router.use(genreRoute)
router.use(detailRoute)

IndexRoute.use('/api/v1',router);

module.exports = IndexRoute;