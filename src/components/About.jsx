import React from "react";



export default function About() {
  const title = {
    margin: "20px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  
  const div = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  
  const p = {
    width: "70%",
    margin: "20px"
  }
  return (
    <div>
      <h3 style={title}>Henry Weather</h3>
      <p>Esta es una aplicación que nos permite buscar ciudades y nos muestra detalladamente su clima, consumiendo recursos de <a href="https://openweathermap.org/">Open Weather</a></p>
    </div>
  );
}
