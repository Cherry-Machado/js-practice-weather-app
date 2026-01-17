// This is the Main JavaScript file for the Weather App. 
// Orchestrates the application logic.

import { fetchWeatherData } from './api.js';
import { createWeatherTemplate, updateDateTime } from './template.js';

const appContainer = document.querySelector(".weather-app");

// 1. Initialize the UI by injecting the template
appContainer.innerHTML = createWeatherTemplate();

const weatherContent = document.querySelector(".weather-content");
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");

// 2. Function to update the UI with fetched data
async function updateWeather(city) {
  const data = await fetchWeatherData(city);
  if (!data) return;

  // Destructure data for cleaner updates
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  // Update DOM elements
  document.querySelector(".city").innerText = name;
  document.querySelector("#current-date").innerText = updateDateTime();
  document.querySelector(".temp").innerText = `${Math.round(temp)}°C`;
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.querySelector(".description").innerText = description;
  document.querySelector(".humidity").innerText = `${humidity}%`;
  document.querySelector(".wind").innerText = `${speed} km/h`;

  // Remove loading state and update background
  weatherContent.classList.remove("loading");
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name},weather')`;
}

// 3. Event Listeners
searchBtn.addEventListener("click", () => updateWeather(searchBar.value));

searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") updateWeather(searchBar.value);
});

// Initial Load
updateWeather("Patna");