const express = require("express");
const mangaRoute = express();
const router = express.Router();
const MangaController = require("../controllers/mangaController");

router
  .get("/popular", MangaController.getPopularManga)
  .get("/page/:page", MangaController.getMangaList)
  .get("/manhwa/:page", MangaController.getManhwaList)
  .get("/manhua/:page", MangaController.getManhuaList)
  .get("/webtoon/:page", MangaController.getWebtoonList)

mangaRoute.use("/manga", router);

module.exports = mangaRoute;
