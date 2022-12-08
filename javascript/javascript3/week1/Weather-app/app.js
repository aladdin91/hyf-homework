console.log("working.");
const apiKey = '2a8c145b05db989897ca23d3b4fa58c9'

const todayDate = document.querySelector('.today-date')
const timeNow = document.querySelector('.time-now')
const nameOftoday = document.querySelector('.today')
const citeName = document.querySelector('.cite-name')
const formInput = document.querySelector('.form-input')
const btn = document.querySelector('.btn')
const temp = document.querySelector('.temp')
const condtion = document.querySelector('.condtion')
const humidityValue = document.querySelector('.humidity-value')
const windValue = document.querySelector('.wind-value')
const icon = document.querySelector('.icon')
const mapContainer = document.querySelector('.map-container')

let today = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = weekday[today.getDay()];

nameOftoday.innerText = day

const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = `${dd}/${mm}/${yyyy}`

todayDate.innerText = today

function showMap(latitude, longitude) {
    const map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
}

function renderResult(resultData) {
    citeName.innerText = `${resultData.name} ${resultData.sys.country}`
    let temperature = resultData.main.temp - 273.15
    let feelsLike = resultData.main.feels_like - 273.15
    temp.innerText = `${temperature.toFixed()} °feels like ${feelsLike.toFixed()}`
    condtion.innerText = resultData.weather[0].main
    humidityValue.innerText = `${resultData.main.humidity}%`
    windValue.innerText = `${resultData.wind.speed} km/h`
    if (resultData.weather[0].main === 'Clear') {
        icon.src = './icon/sunny.svg'
    } else if (resultData.weather[0].main === 'Clouds') {
        icon.src = './icon/cloudy.svg'
    } else if (resultData.weather[0].main === 'Snow') {
        icon.src = './icon/snowy-6.svg'
    }
}

const timeCountDown = () => {
    const hour = String(new Date().getHours()).padStart(2, '0');
    const min = String(new Date().getMinutes()).padStart(2, '0');
    const sec = String(new Date().getSeconds()).padStart(2, '0');
    const timeNowIs = `${hour}:${min}:${sec}`
    timeNow.innerText = timeNowIs
}
timeCountDown()
setInterval(timeCountDown, 1000)

btn.addEventListener('click', () => {
    if (formInput.value === '') {
        alert('Please enter a valid city name')
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formInput.value}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((resultData) => {
                if (resultData.cod === '404') {
                    citeName.innerText = `${resultData.message}`
                } else {
                    const latitude = resultData.coord.lat.toFixed()
                    const longitude = resultData.coord.lon.toFixed()
                    console.log(`${latitude} ${longitude}`)
                    map.remove()
                    mapContainer.innerHTML = `<div id="map"></div>`
                    showMap(latitude, longitude)
                    renderResult(resultData)
                }
            });
    }
})

const findMe = () => {
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        showMap(latitude, longitude)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(2)}&lon=${longitude.toFixed(2)}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((resultData) => {
                renderResult(resultData)
            });
    }
    const error = () => {}
    navigator.geolocation.getCurrentPosition(success, error);
}
findMe()