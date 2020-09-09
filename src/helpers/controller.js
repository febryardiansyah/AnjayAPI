const axios = require("axios").default;
const cheerio = require("cheerio");

axios.defaults.baseURL = "https://bato.to/";

class Controller {
  request(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url);
        console.log(response.status);
        if (response.status === 200) {
          return resolve(response);
        } else {
          return reject(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  load(response){
    const $ = cheerio.load(response);
    return $;
  }
}

module.exports = Controller;
