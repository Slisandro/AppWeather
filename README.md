
## Weather App


### Inicializar el proyecto

Luego de haber clonado el repositorio, vas a tener que instalar las dependencias del mismo, ejecutando el siguiente comando dentro de la carpeta de este repositorio: 

```
npm install
```

Por último debes inicializar el proyecto, con el siguiente comando:

```
npm start
```

El proyecto ya deberia estar corriendo en localhost:3000


### React 

Vamos a tener solamente cuatro componentes: 
  - `<Nav />` va a contener la searchBar y los dos links a Home y About. 
  
  
  ![](https://github.com/Slisandro/AppWeather/blob/master/img-screen/nav.jpg)
  
  
  - `<Cards />` va a contener las cards mientras se vayan agregando.
  
  
  ![](https://github.com/Slisandro/AppWeather/blob/master/img-screen/cards.jpg)
  
  
  - `<Card />` va a contener información básica sobre la ciudad buscada (nombre, temperatura máxima y mínima y una imagen descriptiva sobre el clima). Este componente va a renderizar la response que recibe desde la API.
  
  
  ![](https://github.com/Slisandro/AppWeather/blob/master/img-screen/card.jpg)
  
  
  - `<Cuidad />` va a contener información detallada sobre la ciudad.
  
  
  ![](https://github.com/Slisandro/AppWeather/blob/master/img-screen/ciudad.jpg)
  

### Routing


Vamos a tener tres rutas donde podremos navegar:
 - **"/"**: El home, acá vamos a ver el navbar y las cards agregadas.
 - **"/ciudad/{ciudadId}/"**: en esta ruta, vamos a tener información más detallada sobre el clima de una ciudad en particular, usamos el ID de una ciudad para identificarla.
 - **"/about"**: Una breve descripción de que va la `weatherApp`.


#### Rutas Dinámicas

- `<Nav />` aparece en todas las rutas.
- `<Cards />` aparece sólo en la ruta `/`.
- `<About />` aparece sólo la ruta `/about`.
- `<Cuidad />` aparece sólo en la ruta `/ciudad/{ciudadId}`
