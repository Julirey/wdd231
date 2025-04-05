const key = "ce278e65caae295ef18e8337da2a6053";
const place = "lat=10.64&lon=-71.62";
const units = "imperial";

const urlWeather = `https:///api.openweathermap.org/data/2.5/weather?${place}&units=${units}&appid=${key}`;
const urlForecast = `https:///api.openweathermap.org/data/2.5/forecast?${place}&units=${units}&appid=${key}`;

const currentWeather = document.querySelector("#current-weather .card-content");
const currentForecast = document.querySelector("#forecast .card-content");

// Fetch current weather
async function fetchWeather() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display current weather
function displayResults(data) {
  let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let temp = data.main.temp;

  currentWeather.innerHTML = `
    <img src="${iconsrc}" alt="${toTitleCase(desc)}">
    <div>
      <p><strong>${Math.round(temp)}</strong>&deg;F</p>
      <p>${toTitleCase(desc)}</p>
    </div>
`;
}

// Fetch forecast
async function fetchForecast() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display forecast
function displayForecast(data) {
  const list = data.list
    .filter((forecast) => forecast.dt_txt.includes("12:00:00"))
    .slice(0, 3);

  list.forEach((forecast) => {
    let day = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
    });
    let temp = forecast.main.temp;

    currentForecast.innerHTML += `
        <section>
          <h3>${day}: </h3>
          <p><strong>${Math.round(temp)}&deg;F</strong></p>
        </section>
      `;
  });
}

// Titlecase converter
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

fetchWeather();
fetchForecast();
