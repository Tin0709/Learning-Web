const apiKey = "e0f55863d6f34801a7e123228252406"; 

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city!");

  document.getElementById("loading").style.display = "block";
  document.getElementById("weatherInfo").innerHTML = "";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const info = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <img src="https:${data.current.condition.icon}" />
        <p>${data.current.condition.text}</p>
        <p>🌡 Temp: ${data.current.temp_c}°C</p>
        <p>💧 Humidity: ${data.current.humidity}%</p>
        <p>💨 Wind: ${data.current.wind_kph} km/h</p>
      `;
      document.getElementById("weatherInfo").innerHTML = info;
    })
    .catch(error => {
      document.getElementById("weatherInfo").innerHTML =
        `<p style="color:red;">${error.message}</p>`;
    })
    .finally(() => {
      document.getElementById("loading").style.display = "none";
    });
}


function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

