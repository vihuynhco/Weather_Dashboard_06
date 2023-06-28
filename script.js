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
var searchBtn = document.querySelector(".btn-custom");
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
var dayThreetemp = document.querySelector('#day3temp');
var dayThreewind = document.querySelector('#day3wind');
var dayThreehumidity = document.querySelector('#day3humidity');
var dayFourtemp = document.querySelector('#day4temp');
var dayFourwind = document.querySelector('#day4wind');
var dayFourhumidity = document.querySelector('#day4humidity');
var dayFivetemp = document.querySelector('#day5temp');
var dayFivewind = document.querySelector('#day5wind');
var dayFivehumidity = document.querySelector('#day5humidity');

document.addEventListener("DOMContentLoaded", function () {

console.log(currentCondition);

//fetching the current weather
searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var searchInputValue = searchInput.value.trim();
  console.log(searchInput);
    if (searchInputValue != "") {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          searchInputValue +
          "&appid=" +
          weatherApiKey +
          "&units=imperial"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
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

         // Store search history in local storage
         var searchHistory = JSON.parse(localStorage.getItem("recentSearches")) || [];
         searchHistory.push(searchInputValue);
         localStorage.setItem("recentSearches", JSON.stringify(searchHistory));

         // Display search history
         displaySearchHistory(searchHistory);
       });
   }
 });
      });
    
  


//fething the 5 day forecast
searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var searchInputValue = searchInput.value.trim();
    if (searchInputValue != "") {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          searchInputValue +
          "&appid=" +
          weatherApiKey +
          "&units=imperial"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
      
  //clear the previous data
          dayOne.innerHTML = "";
          dayTwo.innerHTML = "";
          dayThree.innerHTML = "";
          dayFour.innerHTML = "";
          dayFive.innerHTML = "";
      
  //get data for  the first 5 days only
  var forcastData = data.list.slice(0, 5);
  console.log(forcastData);
  //loop through the data
  forcastData.forEach(function (forecast, index)  {
  //get the data and time of the forecast
  var forecastDate = dayjs(forecast.dt_txt);
  console.log(forecastDate);

  //displays the date
  var dateEl = document.querySelector('#date'+index);
  dateEl.textContent = forecastDate.format("MM/DD/YYYY");

 

  });
});
}
});


  // Display search history
  var searchHistory = JSON.parse(localStorage.getItem("recentSearches")) || [];
  displaySearchHistory(searchHistory);

  function displaySearchHistory(searchHistory) {
    var historyList = document.querySelector("#recent-searches");
    historyList.innerHTML = "";

    searchHistory.forEach(function (searchItem) {
      var listItem = document.createElement("li");
      listItem.textContent = searchItem;
      historyList.appendChild(listItem);
    });
  }



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