// api.js - Responsible for fetching data from external services

const API_KEY = "67b92f0af5416edbfe58458f502b0a31";

export async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    alert(error.message);
    return null;
  }
}