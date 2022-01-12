var searchText = document.getElementById("city-search");
var cityHeaderText = document.getElementById("city-header");

var city;
var state;
var country;

function searchLocation()
{
  city = searchText.value;
  var APIKey = "6071a91aca35893504af7b8555d6a497";
  console.log(city);
   apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; "&units=imperial";

  fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    cityHeaderText.textContent = data.name;
    console.log(data);
  });

}

//  getApi(search);
  

  