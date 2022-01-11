var requestUrl = 'api.openweathermap.org/data/2.5/weather';

var APIKey = "6071a91aca35893504af7b8555d6a497";

var city;
var state;
var country;

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response);

        return response.json();
    });
  }
  
  getApi(requestUrl);
  