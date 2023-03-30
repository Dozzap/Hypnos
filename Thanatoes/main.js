const api_Key = "99823ba0beb918401ad14724da6cc0fc";

let currentTime = new Date().toLocaleTimeString();

console.log(currentTime);

//   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("Geolocation is not supported by this browser.");


function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);

  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_Key}`;

  fetch(api)
    .then(response => response.json())
.then(data => console.log(data.weather[0].description));
}

//  {      console.log("Temperature: " + (data.main.temp - 273.15) + "°C");
//     console.log("Feels like: " + (data.main.feels_like - 273.15) + "°C");
//     console.log("Min Temperature: " + (data.main.temp_min - 273.15) + "°C");
//     console.log("Max Temperature: " + (data.main.temp_max - 273.15) + "°C");}
