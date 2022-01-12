//Search variable to process the text input for use in the API
var searchText = document.getElementById("city-search");

//Variables to set the parameters of the main temperature reading from the first API
var cityHeaderText = document.getElementById("city-header");
var cityTemperature = document.getElementById("city-temp");
var cityWind = document.getElementById("city-wind");
var cityHumidity = document.getElementById("city-humidity");
var cityUVIndex = document.getElementById("city-uvindex");

//Date variables for the 5-day forecast
var dayOneDate = document.getElementById("day-one");
var dayTwoDate = document.getElementById("day-two");
var dayThreeDate = document.getElementById("day-three");
var dayFourDate = document.getElementById("day-four");
var dayFiveDate = document.getElementById("day-five");

//Temperature variables for the 5-day forecast
var dayOneTemp = document.getElementById("temp-one");
var dayTwoTemp = document.getElementById("temp-two");
var dayThreeTemp = document.getElementById("temp-three");
var dayFourTemp = document.getElementById("temp-four");
var dayFiveTemp = document.getElementById("temp-five");

//Wind variables for the 5-day forecast
var dayOneWind = document.getElementById("wind-one");
var dayTwoWind = document.getElementById("wind-two");
var dayThreeWind = document.getElementById("wind-three");
var dayFourWind = document.getElementById("wind-four");
var dayFiveWind = document.getElementById("wind-five");

//Humidity variables for the 5-day forecast
var dayOneHumidity = document.getElementById("humidity-one");
var dayTwoHumidity = document.getElementById("humidity-two");
var dayThreeHumidity = document.getElementById("humidity-three");
var dayFourHumidity = document.getElementById("humidity-four");
var dayFiveHumidity = document.getElementById("humidity-five");

//The city variable is whatever is inputted in the text field in the HTML
var city;
//The Latitude and Longitude variables referenced in the second api
var lat;
var lon;

//Adds moment to the project with the today variable
var today = moment();

function searchLocation()
{
  //Sets the city variable to the text input from the HTML
  city = searchText.value;

  //Storing the city search to local storage
  localStorage.setItem("city-search", city.value);

  //API Key to be used in the API url below
  var APIKey = "6071a91aca35893504af7b8555d6a497";
  apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

  //API Fetch to run the API
  fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    //Applying the variable outputs from the weather API, and associating them with the correct HTML variables to populate the main weather page for the searched city
    cityHeaderText.textContent = data.name;
    cityTemperature.textContent = "Temp: " + data.main.temp + "°F";
    cityWind.textContent = data.wind.speed + " MPH";
    cityHumidity.textContent = "Humidity: " + data.main.humidity + "%";
    lat = data.coord.lat;
    lon = data.coord.lon;
    console.log(lat)
    console.log(lon)
    //Runs the second API function to collect lon, lat, and future date data
    moreWeatherDetails();
    console.log(data);
  });
}

function moreWeatherDetails()
{
  //API Key to be used in the API url below
  var APIKey = "6071a91aca35893504af7b8555d6a497";
  apiCall = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&exclude=&appid=" + APIKey + "&units=imperial";

  //API Fetch to run the API
  fetch(apiCall)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Gets and applies the UV index to the main weather forecast
    cityUVIndex.textContent = "UV Index: " + data.current.uvi;
    console.log(cityUVIndex.value)

    //Converts the Unix date in the second Api into a usable date/time format using moment
    var dayOneUnix = moment.unix(data.daily[0].dt).format("MM/DD/YYYY");
    var dayTwoUnix = moment.unix(data.daily[1].dt).format("MM/DD/YYYY");
    var dayThreeUnix = moment.unix(data.daily[2].dt).format("MM/DD/YYYY");
    var dayFourUnix = moment.unix(data.daily[3].dt).format("MM/DD/YYYY");
    var dayFiveUnix = moment.unix(data.daily[4].dt).format("MM/DD/YYYY");

    //Adds the new dates to the 5-day forecast date ID's
    $("#date-one").text(dayOneUnix);
    $("#date-two").text(dayTwoUnix);
    $("#date-three").text(dayThreeUnix);
    $("#date-four").text(dayFourUnix);
    $("#date-five").text(dayFiveUnix);

    //Adds the temperature readings from the 5-day forecast in the second API
    dayOneTemp.textContent = data.daily[0].temp.day + "°F";
    dayTwoTemp.textContent = data.daily[1].temp.day + "°F"
    dayThreeTemp.textContent = data.daily[2].temp.day + "°F";
    dayFourTemp.textContent = data.daily[3].temp.day + "°F";
    dayFiveTemp.textContent = data.daily[4].temp.day + "°F";

    //Adds the wind readings from the 5-day forecast in the second API
    dayOneWind.textContent = data.daily[0].wind_speed + " MPH";
    dayTwoWind.textContent = data.daily[1].wind_speed + " MPH";
    dayThreeWind.textContent = data.daily[2].wind_speed + " MPH";
    dayFourWind.textContent = data.daily[3].wind_speed + " MPH";
    dayFiveWind.textContent = data.daily[4].wind_speed + " MPH";

    //Adds the humidity readings from the 5-day forecast in the second API
    dayOneHumidity.textContent = data.daily[0].humidity + "%";
    dayTwoHumidity.textContent = data.daily[1].humidity + "%";
    dayThreeHumidity.textContent = data.daily[2].humidity + "%";
    dayFourHumidity.textContent = data.daily[3].humidity + "%";
    dayFiveHumidity.textContent = data.daily[4].humidity + "%";

    console.log(data);
  });
}


//  getApi(search);
  

  