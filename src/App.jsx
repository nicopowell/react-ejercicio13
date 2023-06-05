import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Formulario from "./components/Formulario";
import Tarjeta from "./components/Tarjeta";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [climaResultados, setClimaResultados] = useState([])
  const consultarAPI = async (ciudad) => {
    try {
      const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f2ed386da4ae05abbde12d8a4ac41a66&units=metric`);
      const datos = await respuesta.json();
      setClimaResultados(datos);
      console.log(climaResultados)
    } catch (errores) {
      console.log(errores);
    }
  };

  const handleSubmit = (ciudad) => {
    consultarAPI(ciudad);
  }

  return (
    <Container className="d-flex flex-column">
      <h1 className="text-light display-4 text-center mt-4">Web del clima</h1>
      <hr className="text-light"/>
      <Formulario onSubmit={handleSubmit} consultarAPI={consultarAPI}></Formulario>
      <Tarjeta></Tarjeta>
    </Container>
  )
}

export default App
