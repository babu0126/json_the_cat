const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('error:', error.message);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`statusCode: ${response.statusCode}`, null);
      return;
    }
    let parseBody = JSON.parse(body); 
    if (!body.length) { 
      callback(`The breed is not found!`, null);
      return;
    } 
    callback(null, parseBody[0].description);
});
};

module.exports = {fetchBreedDescription};