const express = require("express");
const detailRoute = express();
const router = express.Router();
const {DetailMangaController} = require("../controllers/index")

router.get('/:id',DetailMangaController.getDetail)

detailRoute.use('/detail',router);

module.exports = detailRoute;