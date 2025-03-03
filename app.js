const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key

// Handle the form submission
document.getElementById("weather-form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    const city = document.getElementById("city").value;  // Get the city input value
    getWeather(city);  // Call the function to fetch weather data
});

// Fetch weather data based on city name
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Update the weather info in the HTML
                document.getElementById("location").textContent = `Location: ${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
            } else {
                // Handle errors (e.g., invalid city name)
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('There was an error fetching the weather data. Please try again.');
        });
}
