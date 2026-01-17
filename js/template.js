// template.js - Responsible for creating the HTML template and UI elements

export function createWeatherTemplate() {
  return `
    <div class="card">
      <div class="search-container">
        <input type="text" class="search-bar" placeholder="Enter city name...">
        <button class="search-btn">Search</button>
      </div>
      <div class="weather-content loading">
        <div class="date-time" id="current-date"></div>
        <h2 class="city">Loading...</h2>
        <div class="main-info">
          <h1 class="temp">--°C</h1>
          <img src="" alt="" class="icon" />
        </div>
        <p class="description"></p>
        <div class="details-grid">
          <div class="detail-item">
            <span>Humidity</span>
            <span class="humidity">--%</span>
          </div>
          <div class="detail-item">
            <span>Wind Speed</span>
            <span class="wind">-- km/h</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to update the date and time

export function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
  return now.toLocaleDateString('en-US', options);
}