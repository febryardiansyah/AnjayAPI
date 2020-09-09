const BaseGetPage = require("../helpers/getPage");

class GenreController extends BaseGetPage {
  getGenreList = async (req, res) => {
    try {
      const response = await super.request("browse");
      const $ = super.load(response.data);
      const genreList = [];
      const obj = {};

      console.log($(".filter").children().length);
      res.send(obj);
    } catch (error) {
      console.log(error);
    }
  };
  getMangaByGenre = async (req, res) => {
    const genreName = req.params.genreName;
    await super.getPage(req, res, `https://bato.to/browse?genres=${genreName}`);
  };
}

module.exports = new GenreController();
