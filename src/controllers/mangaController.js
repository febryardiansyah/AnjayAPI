const cheerio = require("cheerio");
const BaseGetPage = require("../helpers/getPage");

class MangaController extends BaseGetPage {
  getPopularManga = async (req, res) => {
    try {
      const response = await super.request();
      const $ = super.load(response.data);
      let obj = {};
      let manga_list = [];
      
      obj.status = true;
      obj.message = "success";
      $(".row")
        .find(".col-8")
        .each((i, el) => {
          manga_list.push({
            title: $(el).find(".item-title").text(),
            chapter: $(el).find(".item-volch").text(),
            id: $(el).find("a").attr("href").replace("/series/", ""),
            link: "https://bato.to" + $(el).find("a").attr("href"),
            thumb: $(el).find("img").attr("src").split("//").join("https://"),
          });
        });
      obj.manga_list = manga_list;
      res.send(obj);
    } catch (error) {
      res.send({
        status: false,
        message: error,
      });
    }
  };

  getMangaList = async (req, res) => {
    const { page } = req.params;
    await super.getPage(req, res, `browse?styles=manga&page=${page}`);
  };

  getManhwaList = async (req, res) => {
    const { page } = req.params;
    await super.getPage(req, res, `browse?styles=manhwa&page=${page}`);
  };

  getManhuaList = async (req, res) => {
    const { page } = req.params;
    await super.getPage(req, res, `browse?styles=manhua&page=${page}`);
  };

  getWebtoonList = async (req, res) => {
    const { page } = req.params;
    await super.getPage(req, res, `browse?styles=webtoon&page=${page}`);
  };
}

module.exports = new MangaController();
