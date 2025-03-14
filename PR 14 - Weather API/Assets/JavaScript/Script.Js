const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = "17d138ea5cd0d1b78eff25d9cea7001c";
let weather = {
  fetchWeather: function (city) {
    fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data))
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again later.");
      });
  },
  displayWeather: function (data) {
    if (!data.weather || !data.weather[0] || !data.main || !data.wind) {
      alert("Weather data is incomplete.");
      return;
    }
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    const cityElement = document.querySelector(".city");
    if (cityElement) cityElement.innerText = `Weather in ${name}`;

    const iconElement = document.querySelector(".icon");
    if (iconElement)
      iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;

    const descriptionElement = document.querySelector(".description");
    if (descriptionElement) descriptionElement.innerText = description;

    const tempElement = document.querySelector(".temp");
    if (tempElement) tempElement.innerText = `${temp}°C`;

    const humidityElement = document.querySelector(".humidity");
    if (humidityElement) humidityElement.innerText = `Humidity: ${humidity}%`;

    const windElement = document.querySelector(".wind");
    if (windElement) windElement.innerText = `Wind speed: ${speed} km/h`;

    const weatherElement = document.querySelector(".weather");
    if (weatherElement) weatherElement.classList.remove("loading");
  },
  search: function () {
    const city = document.querySelector(".search-bar").value.trim();
    if (city) {
      this.fetchWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

// Fetch weather data for a default city
weather.fetchWeather("Switzerland");
