const cheerio = require('cheerio');
const BaseService = require('../helpers/axiosService');

class MangaController extends BaseService() {

    getPopularManga = async(req,res) => {
        try {
            const response = await this.request()
            const $ = cheerio.load(response.data)
            let obj = {}
            let manga_list = []
            obj.status = true
            obj.message = 'success'
            $('.row').find('.col-8').each((i,el )=>{
                manga_list.push({
                    title: $(el).find('.item-title').text(),
                    chapter: $(el).find('.item-volch').text(),
                    id:$(el).find('a').attr('href').replace('/series/',''),
                    link: 'https://bato.to'+$(el).find('a').attr('href'),
                    thumb: $(el).find('img').attr('src').split('//').join('https://'),
                })
            })
            obj.manga_list = manga_list
            res.send(obj)
        } catch (error) {
            res.send({
                status:false,message:error
            })
        }
    }

    getMangaList = async(req,res) =>{
        const {page} = req.params;
        try {
            const response = await this.request(`browse?styles=manga&page=${page}`)
            const $ = cheerio.load(response.data)
            let obj  = {}
            let manga_list = []

            obj.status = true
            obj.message = 'success'
            $('#series-list').find('.col-24').each((i,el)=>{
                let updated_on = $(el).find('.item-volch').text().trim()
                let genre_list
                genre_list = ($(el).find('.item-genre').text().split(' / '))
                manga_list.push({
                    title: $(el).find('.item-title').text(),
                    chapter: updated_on.split('            ')[0].trim(),
                    updated_on : updated_on.split('            ')[1],
                    id:$(el).find('a').attr('href').replace('/series/',''),
                    link: 'https://bato.to'+$(el).find('a').attr('href'),
                    thumb: $(el).find('img').attr('src').split('//').join('https://'),
                    genre_list:genre_list
                })
            })
            obj.manga_list = manga_list
            res.send(obj)
        } catch (error) {
            res.send({
                status:false,message:error,manga_list : []
            })
        }
    }

    getManhwaList = async(req,res) => {
        const {page} = req.params;
        try {
            const response = await this.request(`browse?styles=manhwa&page=${page}`)
            const $ = cheerio.load(response.data)
            let obj  = {}
            let manga_list = []

            obj.status = true
            obj.message = 'success'
            $('#series-list').find('.col-24').each((i,el)=>{
                let updated_on = $(el).find('.item-volch').text().trim()
                let genre_list
                genre_list = ($(el).find('.item-genre').text().split(' / '))
                manga_list.push({
                    title: $(el).find('.item-title').text(),
                    chapter: updated_on.split('            ')[0].trim(),
                    updated_on : updated_on.split('            ')[1],
                    id:$(el).find('a').attr('href').replace('/series/',''),
                    link: 'https://bato.to'+$(el).find('a').attr('href'),
                    thumb: $(el).find('img').attr('src').split('//').join('https://'),
                    genre_list:genre_list
                })
            })
            obj.manga_list = manga_list
            res.send(obj)
        } catch (error) {
            res.send({
                status:false,message:error,manga_list : []
            })
        }
    }

    getManhuaList = async(req,res) => {
        const {page} = req.params;
        try {
            const response = await this.request(`browse?styles=manhua&page=${page}`)
            const $ = cheerio.load(response.data)
            let obj  = {}
            let manga_list = []

            obj.status = true
            obj.message = 'success'
            $('#series-list').find('.col-24').each((i,el)=>{
                let updated_on = $(el).find('.item-volch').text().trim()
                let genre_list
                genre_list = ($(el).find('.item-genre').text().split(' / '))
                manga_list.push({
                    title: $(el).find('.item-title').text(),
                    chapter: updated_on.split('            ')[0].trim(),
                    updated_on : updated_on.split('            ')[1],
                    id:$(el).find('a').attr('href').replace('/series/',''),
                    link: 'https://bato.to'+$(el).find('a').attr('href'),
                    thumb: $(el).find('img').attr('src').split('//').join('https://'),
                    genre_list:genre_list
                })
            })
            obj.manga_list = manga_list
            res.send(obj)
        } catch (error) {
            res.send({
                status:false,message:error,manga_list : []
            })
        }
    }
}

module.exports = new MangaController;