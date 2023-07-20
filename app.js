const input = document.getElementById('valores');
const button = document.getElementById('buscar');
const container = document.querySelector('.container-weather')

const ciudades = []

// url
const getDateCities = async () => {

    button.addEventListener('click', async () => {
        const pathInitialCoord = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        const tokenCoord = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja2tvZHh4Y3YwMDhnMnBvY3ozbHUxdGJvIn0.3zptKSSxJrM5VmfjnkKMYA&limit=5&language=es'
        const inputText = input.value;
        const mapbox = `${pathInitialCoord}${inputText}.json?access_token=${tokenCoord}`
        await searchLongLat(mapbox)
    })

    // Buscar Longitud, latitud y nombre de la ciudad
    const searchLongLat = async (url) => {
        const response = await fetch(url)
        const responseJson = await response.json()
        // obtener nombre
        // console.log(responseJson.features[0].place_name);
        // obtener  [lng - lat]
        // console.log(responseJson.features[0].center);
        const pathInitWeather = 'https://api.openweathermap.org/data/2.5/weather'
        const appId = 'f369635965b00ad16ced5da4da4b9f3b'
        const units = 'metric'
        const lang = 'es'
        const lat = responseJson.features[0].center[1]
        const long = responseJson.features[0].center[0]
        const urlWeather = `${pathInitWeather}?appid=${appId}&units=${units}&lang=${lang}&lat=${lat}&lon=${long}`
        dateWeather(urlWeather , responseJson.features[0].place_name)
        console.log(responseJson.features[0].place_name);
        
    }
// buscar mas información del clima
    const dateWeather = async (url, nombre) => {
        const response = await fetch(url);
        const responseJson = await response.json()
        console.log(responseJson.main.temp);

        let  name = nombre
        let temperatura = responseJson.main.temp
        const clima = {
            nombre: name,
            temp: temperatura
        }

        ciudades.push(clima)
        console.log(ciudades);
    }
}

// recorrer el arreglo
const renderArray = (ciudades) => {
    console.log(ciudades);
    for (let ciudad of ciudades) {
        console.log(ciudad);
        renderCardWeather(ciudad)

    }
}

const renderCardWeather = (ciudad) => {
    const card = document.createElement('div')
    console.log(card);
    card.classList = 'card'
    card.innerHTML = `<h2>${ciudad.nombre}</h2>`
    container.appendChild(card)
}

const main = async () => {
    await getDateCities();
    renderArray(ciudades);
}

main()


