


function checkWeather() {
 
    var cityName = document.getElementById("cityname").value;
    
    
    var apiKey = '97b5704e275440e5e558cfd4d4d423cc';
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
        
            var temperature = data.main.temp;
            

            document.getElementById("temperature").innerText = temperature + '°C';
        })
        .catch(error => {
            
            console.log('Error fetching weather data:', error);
        });
}

