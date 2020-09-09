const express = require("express");
const { GenreController } = require("../controllers");
const genreRoute = express();
const router = express.Router();

router.get("/", GenreController.getGenreList);
router.get("/:genreName", GenreController.getMangaByGenre);

genreRoute.use("/genres", router);

module.exports = genreRoute;
