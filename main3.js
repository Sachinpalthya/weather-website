function getWeather() {
    // Replace 'YOUR_API_KEY' with the actual API key you obtained from the weather API provider.
    const apiKey = 'YOUR_API_KEY';
    const city = 'NIZAMABAD'; 

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoElement = document.getElementById('weather-info');

    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfoElement.innerHTML = weatherHTML;
}
