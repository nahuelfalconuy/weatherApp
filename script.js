const urlBase = `https://api.openweathermap.org/data/2.5/weather` // api url
const API_KEY = '' // your api key from openweathermap

document.getElementById('searchButton').addEventListener('click', () =>{
    const city = document.getElementById('cityInput').value;
    if(city){
        //call api function
        fetchWeather(city)
        
    } else {
        alert('Please enter a valid city')
    }

})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML = '';

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `Temperature: ${temp}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `Humidity: ${humidity}%`

    const icoInfo = document.createElement('img')
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; 

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `the weather description is : ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(icoInfo)
    divResponseData.appendChild(descriptionInfo)
}


