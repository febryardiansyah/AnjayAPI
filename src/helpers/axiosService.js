const axios = require("axios").default;

axios.defaults.baseURL = "https://bato.to/";

const BaseService = () => {
  return class {
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
  };
};

module.exports = BaseService;
