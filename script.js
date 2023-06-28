//curent day weather
//            api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//example + unit conver : api.openweathermap.org/data/2.5/weather?q=denver&appid=c2b52cde2160b0f2799bab8a09974372&units=imperial
// q={city name} ;
// +  '&units=imperial'

//to convert from kelvin to Farenheight
// &units=imperial
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//5 day weather forecast
//            api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// example : api.openweathermap.org/data/2.5/forecast?q=Denver&appid=c2b52cde2160b0f2799bab8a09974372

var requestUrl = "api.openweathermap.org/data/2.5/weather?q=";
var weatherApiKey = "c2b52cde2160b0f2799bab8a09974372";

var searchBtn = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");

var recentSearches = localStorage.getItem("recentSearches");
var currentCondition = document.querySelector("#current-condition");
var dayOne = document.querySelector('#day1');
var dayTwo = document.querySelector('#day2');
var dayThree = document.querySelector('#day3');
var dayFour = document.querySelector('#day4');
var dayFive = document.querySelector('#day5');
var dateOne = document.querySelector('#date1');
var dateTwo = document.querySelector('#date2');
var dateThree = document.querySelector('#date3');
var dateFour = document.querySelector('#date4');
var dateFive = document.querySelector('#date5');
var dayTwotemp = document.querySelector('#day2temp');
var dayTwowind = document.querySelector('#day2wind');
var dayTwohumidity = document.querySelector('#day2humidity');

console.log(currentCondition);

$(document).ready(function () {
  $("#search-city-field").submit(function (event) {
    event.preventDefault();
    var searchInput = document.querySelector("#search-input").value.trim();
    if (searchInput != "") {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          searchInput +
          "&appid=" +
          weatherApiKey +
          "&units=imperial"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
       var currentCondition = document.querySelector("#current-condition");
       currentCondition.innerHTML = "";

       var liElCityName = document.createElement("li");
        liElCityName.textContent = "City: " + data.name;
        currentCondition.appendChild(liElCityName);

        var liEltemp = document.createElement("li");
        liEltemp.textContent = "Temperature: " + data.main.temp + " F";
        console.log(liEltemp);
        currentCondition.appendChild(liEltemp);

        var liElspeed = document.createElement("li");
        liElspeed.textContent = "Wind Speed: " + data.wind.speed + " MPH";
        currentCondition.appendChild(liElspeed);

        var liElhumidity = document.createElement("li");
        liElhumidity.textContent = "Humidity: " + data.main.humidity;
        currentCondition.appendChild(liElhumidity);
      });
    }


//fething the 5 day forecast
    if (searchInput != "") {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          searchInput +
          "&appid=" +
          weatherApiKey +
          "&units=imperial"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.name);
          var dateOne = document.querySelector('#date1');
          var dateTwo = document.querySelector('#date2');
          var dateThree = document.querySelector('#date3');
          var dateFour = document.querySelector('#date4');
          var dateFive = document.querySelector('#date5');

          dateOne.textContent = "";
          dateTwo.textContent = "";
          dateThree.textContent = "";
          dateFour.textContent = "";
          dateFive.textContent = "";

          console.log(dateOne.textContent) 

          var day2temp = document.querySelector('#day2temp');
          var day2wind = document.querySelector('#day2wind');
          var day2humidity = document.querySelector('#day2humidity');

          day2temp.textContent = "Temperature: " + data.main.temp + " F";
          day2wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
          day2humidity.textContent = "Humidity: " + data.main.humidity;

          var day3temp = document.querySelector('#day3temp');
          var day3wind = document.querySelector('#day3wind');
          var day3humidity = document.querySelector('#day3humidity');

          day3temp.textContent = "Temperature: " + data.main.temp + " F";
          day3wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
          day3humidity.textContent = "Humidity: " + data.main.humidity;

          var day4temp = document.querySelector('#day4temp');
          var day4wind = document.querySelector('#day4wind');
          var day4humidity = document.querySelector('#day4humidity');
        
          day4temp.textContent = "Temperature: " + data.main.temp + " F";
          day4wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
          day4humidity.textContent = "Humidity: " + data.main.humidity;

          var day5temp = document.querySelector('#day5temp');
          var day5wind = document.querySelector('#day5wind');
          var day5humidity = document.querySelector('#day5humidity');

          day5temp.textContent = "Temperature: " + data.main.temp + " F";
          day5wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
          day5humidity.textContent = "Humidity: " + data.main.humidity;

        });
    }
          
  });
});


//searchInput.textContent = recentSearches;

// searchBtn.addEventListener("click", function () {
//   searchInput.textContent = recentSearches;
//   console.log(recentSearches);
//   localStorage.setItem("recentSearches", textInput);
// });

//captures city input
// var textInput = (event) => {
//   //prevents the page from reloading when you hit submit
//   event.preventDefault();
//   var cityInput = document.querySelector("#search-input").val().trim;
//   console.log(cityInput.text);
// };

//add Event Listener to search button

//var locationCatch = function(){

//}
//https://openweathermap.org/forecast5
// `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
//requires long&lat; use
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//API call

//function getApi() {
// fetch request gets a list of all the repos for the node.js organization
//var requestUrl = ttps://api.github.com/orgs/nodejs/repos';

// console.log (fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={c2b52cde2160b0f2799bab8a09974372}'))

//.then(function (response) {
//    return response.json();
//   })
//  .then(function (data) {
//   console.log(data)
