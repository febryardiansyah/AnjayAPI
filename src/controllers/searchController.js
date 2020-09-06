const cheerio = require("cheerio");
const BaseService = require("../helpers/axiosService");

class SearchController extends BaseService {
  search = async (req, res) => {
    const { query } = req.params;
    const page = req.params.page === undefined ? "" : req.params.page;
    try {
      const response = await super.request(`search?q=${query}&a=&p=${page}`);
      const $ = cheerio.load(response.data);
      const obj = {};
      let manga_list = [];

      obj.status = true
      obj.message = 'success';
      $("#series-list")
        .find(".col-24")
        .each((index, el) => {
            manga_list.push({
                id: $(el).find("a").attr("href").replace('/series/',''),
                title: $(el).find(".item-text").find('.item-title').text(),
                thumb : $(el).find("a").find('img').attr('src').replace('//','https://'),
                chapter: $(el).find(".item-volch > a").text(),
                updated_on : $(el).find("i").text(),
                genre_list : $(el).find('.item-genre').text().split(' / ')
            })      
        });
      obj.manga_list = manga_list;
      res.send(obj);
      
    } catch (error) {
      res.send({
        status: false,
        message: error,
        manga_list: [],
      });
    }
  };
}

module.exports = new SearchController();
