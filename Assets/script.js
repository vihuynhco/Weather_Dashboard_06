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
var dayTwohumidty = document.querySelector('#day2humidity');

console.log(currentCondition);

$(document).ready(function () {
  $(searchBtn).click(function (event) {
    event.preventDefault();
    var searchInput = document.querySelector("#search-input").value.trim();
    console.log(searchInput);

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
          var liElCityName = document.createElement("li");
          liElCityName.textContent = "City: " + data.name;
          currentCondition.appendChild(liElCityName);

          var liEltemp = document.createElement("li");
          liEltemp.textContent = "Temperature: " + data.main.temp + " F";
          console.log(liEltemp);
          currentCondition.appendChild(liEltemp);

          var liElspeed = document.createElement("li");
          liElspeed.textContent = "Winde Speed: " + data.wind.speed + " MPH";
          currentCondition.appendChild(liElspeed);

          var liElhumidity = document.createElement("li");
          liElhumidity.textContent = "Humidity: " + data.main.humidity;
          currentCondition.appendChild(liElhumidity);

          fetch(
            "https:api.openweathermap.org/data/2.5/forecast?q=" +
              searchInput +
              "&appid=" +
              weatherApiKey +
              "&units=imperial"
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
               
                dateOne.textContent = data.list[0].dt_txt
                dateTwo.textContent = data.list[1].dt_txt
                dateThree.textContent = data.list[2].dt_txt
                dateFour.textContent = data.list[3].dt_txt
                dateFive.textContent = data.list[4].dt_txt
                day2temp.textContent = data.list[1].main.temp
                console.log(dateOne.textContent) 
             
             

              console.log(data.list[0].main.temp);
              console.log(data.list[0].wind.speed);
              console.log(data.list[0].main.humidity);
              console.log(data.list[0].dt_txt);
              console.log(data.list[1].main.temp);
              console.log(data.list[1].wind.speed);
              console.log(data.list[1].main.humidity);
              console.log(data.list[1].dt_txt);

            });
            
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
