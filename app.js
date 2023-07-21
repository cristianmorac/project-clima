const input = document.getElementById('valores');
const button = document.getElementById('search');
const buttonHistory = document.getElementById('hisory');
const infoHistory = document.getElementById('cardInfoHistory')
const container = document.querySelector('.container-weather')


let globalCity = []
const urlCoordName = []

// limpiar busqueda
const cleanContent = () => {
    container.innerHTML = ""
}

// url
const getDateCities = async () => {

    button.addEventListener('click', async () => {
        cleanContent()
        const pathInitialCoord = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        const tokenCoord = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja2tvZHh4Y3YwMDhnMnBvY3ozbHUxdGJvIn0.3zptKSSxJrM5VmfjnkKMYA&limit=5&language=es'
        const inputText = input.value;
        const mapbox = `${pathInitialCoord}${inputText}.json?access_token=${tokenCoord}`
        await urlDataweather(mapbox)
        input.value = ""
    })

    // Buscar Longitud, latitud y nombre de la ciudad
    const urlDataweather = async (url) => {
        const response = await fetch(url)
        const responseJson = await response.json()
        const pathInitWeather = 'https://api.openweathermap.org/data/2.5/weather'
        const appId = 'f369635965b00ad16ced5da4da4b9f3b'
        const units = 'metric'
        const lang = 'es'

        // obtener url y nombre
        for (let coord of responseJson.features) {
            const lat = coord.center[1]
            const long = coord.center[0]
            const urlWeather = `${pathInitWeather}?appid=${appId}&units=${units}&lang=${lang}&lat=${lat}&lon=${long}`
            let nameCity = coord.place_name

            const dataInfo = {
                nameCity: nameCity,
                url: urlWeather
            }
            urlCoordName.push(dataInfo)
        }
        dateWeather(urlCoordName)
    }

    // buscar mas información del clima por ciudad
    const dateWeather = async (urls) => {
        for (let url of urls) {
            const response = await fetch(url.url);
            const responseJson = await response.json()
            let nameCity = url.nameCity
            let temp = `${responseJson.main.temp} °C`
            let temp_max = `${responseJson.main.temp_max} °C`
            let temp_min = `${responseJson.main.temp_min} °C`
            let weatherDescription = responseJson.weather[0].description
            const weather = {
                nameCity,
                temp,
                temp_max,
                temp_min,
                weatherDescription
            }
            globalCity.unshift(weather)
        }
        renderArray(globalCity);
    }

    const renderArray = async (cities) => {
        let count = 0
        for (let city of cities) {
            if (count < 9) {
                renderCardWeather(city)
            }
            count +=1
        }
    }

    const renderCardWeather = (city) => {
        const card = document.createElement('div')
        card.classList = 'card'
        let h2 = document.createElement('h2')
        h2.innerHTML = city.nameCity
        const cardText = document.createElement('div')
        cardText.classList = 'cardContent'

        cardText.innerHTML = 
            `<img src="img/${city.weatherDescription}.png" alt="${city.weatherDescription}" class="type-clima"></img>`       

        cardText.innerHTML += `
                <div class="cardText">
                <p>Weather: ${city.weatherDescription}</p>
                <p>Temp: ${city.temp}</p>
                <p>Temp max: ${city.temp_max}</p>
                <p>Temp min: ${city.temp_min}</p>
                </div>
            `
        card.appendChild(h2)
        card.append(cardText)
        container.appendChild(card)
        
    }
}

getDateCities()

