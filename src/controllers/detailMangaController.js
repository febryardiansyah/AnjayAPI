const Controller = require("../helpers/controller")

class DetailMangaController extends Controller{
    getDetail = async (req, res) => {
        const {id} = req.params;
        try {
            const response = await super.request(`series/${id}`)
            const $ = super.load(response.data)
            const main ={}
            const obj = {};
            let chapterList = [];

            obj.title = $('.item-title').text().trim();
            obj.id = id;
            obj.link = 'https://bato.to'+$('.item-title > a').attr('href');
            $(".row").filter((i,el)=>{
              obj.thumb = 'https:'+$(el).first().find("img").attr('src');
              $(el).last().filter((j,elm)=>{
                  obj.rank = $(elm).find('div:nth-child(1)').find('span').text()
                  obj.author = $(elm).find('div:nth-child(2)').find('span > a').text()
                  obj.genres = $(elm).find('div:nth-child(3)').find('span').text().split(' / ')
                  obj.status = $(elm).find('div:nth-child(4)').find('span').text()
                  obj.synopsis = $(elm).find('pre').text().trim()
              })
            })
            
            $('div.mt-4.chapter-list > div.main').find('.p-2').each((i, elm) => {
                chapterList.push({
                    chapter_title : $(elm).find('.chapt').text().trim(),
                    chapter_id : $(elm).find('a').attr('href').replace('/chapter/',''),
                    chapter_link : 'https://bato.to'+$(elm).find('a').attr('href'),
                    chapter_updated_on : $(elm).find('i').text(),
                })
            })
            
            obj.chapter_list = chapterList

            main.status = true
            main.message = 'success'
            main.detail = obj

            res.send(main);

        } catch (error) {
            res.send({status:false, message:error})
        }
    }
}

module.exports = new DetailMangaController();