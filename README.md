## Weather App

### React 

Vamos a tener solamente cuatro componentes: 
  - `<Nav />` va a contener la searchBar y los dos links a Home y About.
  - `<Cards />` va a contener las cards mientras se vayan agregando.
  - `<About />` contiene una breve descripción del proyecto.
  - `<Card />` va a contener información básica sobre la ciudad buscada (nombre, temperatura máxima y mínima y una imagen descriptiva sobre el clima). Este componente va a renderizar la response que recibe desde la API.
  - `<Cuidad />` va a contener información detallada sobre la ciudad.

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