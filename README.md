# Documentación página web del clima

[visualización markdown](http://localhost:8090/ "extensión vscode instant Markdown" )

## Funciones
```js
/* Elimina las tarjetas en el navegador */
const cleanContent = () => {}

/* Obtener información de la ciudad */
const getDateCities = async () => {
    button.addEventListener('click', async () => {/*obtener la información de coordeanas y valor del input*/
    cleanContent() // limpiar navegador
    const inputText = input.value;
    const mapbox // obtener url para consumir API de coordenadas
    })

    /* Crear url de API del clima y obtener el nombre de la ciudad */
    const searchLongLat = async (url) => {
        for (let coord of responseJson.features) {/* crear url de información del clima */
            const urlWeather // url para consumir API del clima
            /* Objeto: dataInfo
            {nameCity: 'Calivo, Aclán, Filipinas', 
            url: 'https://api.openweathermap.org/data/2.5/weather?ap…units=metric&lang=es&lat=11.708&lon=122.36'}
            */
            const dataInfo = {
                nameCity: nameCity,
                url: urlWeather
            }
            urlCoordName.push(dataInfo) // guardar objeto en una lista
        }
        dateWeather(urlCoordName) // enviar objeto a la función
    }

    /* Buscar toda la información del clima por ciudad */
    const dateWeather = async (urls) => {
        /* recorrer objeto y consumir la API */
        for (let url of urls) {
            /* objeto: clima
            {nombre: 'Calivo, Aclán, Filipinas', temp: '26.73 °C', temp_max: '26.73 °C'
            , temp_min: '26.73 °C', weatherDescription: 'muy nuboso'}
            */
           const weather = {
                nameCity,
                temp,
                temp_max,
                temp_min,
                weatherDescription
            }
            globalCity.unshift(clima) // guardar en una lista info de la ciudad
    }
        renderArray(globalCity); // enviar la lista a la función
    }

    /* recorrer las ciudades con su información */
    const renderArray = (cities) => {
        /* muestre las primeras 9 posiciones */
        if (count < 9) {
                renderCardWeather(city)// enviar una ciudad para crear las tarjetas
    }
            }

    /* Crear tarjetas en index.html */
    const renderCardWeather = (city) => {
        card.appendChild(h2) // añadir el titulo en card
        card.append(cardText) // añadir información del clima
        container.appendChild(card) // añadir al container del index.html
    }
}
```
### Paleta de colores

Se utiliza la página web [colorHunt](https://colorhunt.co/) para los ***colores*** de la página web

```css
:root {
  --primario: #9be8d8;
  --secundario: #f8fdcf;
  --tercero: #e2f6ca;
  --fondo: #78c1f3;
}
```

#### Información adicional

- Las imagenes deben tener el mismo nombre a la información del clima, cuando se cree la etiqueta img se obtenga la imagen que corresponde dependiendo el clima de la ciudad
- La aplicación es responsive

