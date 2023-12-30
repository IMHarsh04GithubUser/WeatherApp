function getWeather() {
    const apiKey = '6ee4559e43f19ecf7a70117c43869552'; 
    const city = document.getElementById('city').value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    
 
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const location = data.name + ', ' + data.sys.country;
            const temperature = (data.main.temp - 273).toFixed(1) + '°C';
            const description = data.weather[0].description;
 
            document.getElementById('location').innerText = location;
            document.getElementById('temperature').innerText = "Temperature:" + temperature;
            document.getElementById('description').innerText = 'Description: ' + description;
        })
        .catch(error => {
            
            alert('Error fetching weather data. Please try again.');
        });
 }