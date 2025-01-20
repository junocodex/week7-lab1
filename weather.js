"use strict";

let tableBody = document.getElementById("table-body");
let avgTempButton = document.getElementById("avgTemp");
let maxRainButton = document.getElementById("maxRain");
let avgTempResult = document.getElementById("avgTempResult");
let maxRainResult = document.getElementById("maxRainResult");

let daysWeather = [
  { day: "Sunday", temperature: 60, rainfall: 0.2 },
  { day: "Monday", temperature: 55, rainfall: 0 },
  { day: "Tuesday", temperature: 63, rainfall: 0.3 },
  { day: "Wednesday", temperature: 57, rainfall: 0.25 },
];

function renderWeatherTable() {
  const rows = daysWeather
    .map((weather) => {
      return `
        <tr>
          <td>${weather.day}</td>
          <td>${weather.temperature}</td>
          <td>${weather.rainfall}</td>
        </tr>
      `;
    })
    .join("");

  tableBody.innerHTML = rows;
}

avgTempButton.addEventListener("click", () => {
  const totalTemp = daysWeather.reduce(
    (sum, weather) => sum + weather.temperature,
    0
  );
  const avgTemp = totalTemp / daysWeather.length;
  avgTempResult.innerText = `Average Temp: ${avgTemp} °F`;
});

maxRainButton.addEventListener("click", () => {
  let maxRain = daysWeather[0].rainfall;
  let maxRainDay = daysWeather[0].day;

  for (let i = 1; i < daysWeather.length; i++) {
    const weather = daysWeather[i];
    if (weather.rainfall > maxRain) {
      maxRain = weather.rainfall;
      maxRainDay = weather.day;
    }
  }
  maxRainResult.innerText = `Max Rainfall: ${maxRainDay} with ${maxRain} inches`;
});

renderWeatherTable();
