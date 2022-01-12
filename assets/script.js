
var APIKey = "6071a91aca35893504af7b8555d6a497";

var city = ["chicago"];
var state;
var country;

var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6071a91aca35893504af7b8555d6a497";

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response);

        return response.json();
    });
  }
  
  getApi(requestUrl);
  