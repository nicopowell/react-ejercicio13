import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/Formulario";
import Tarjeta from "./components/Tarjeta";
import { Alert, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const [climaResultados, setClimaResultados] = useState([]);
  const [resultadosCargados, setResultadosCargados] = useState(false);
  const consultarAPI = async (ciudad) => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f2ed386da4ae05abbde12d8a4ac41a66&units=metric&lang=es`
      );
      const datos = await respuesta.json();
      setClimaResultados(datos);
      console.log(datos);
      setResultadosCargados(true);
    } catch (errores) {
      console.log(errores);
      setResultadosCargados(false);
    }
  };

  const handleSubmit = (ciudad) => {
    setResultadosCargados(false);
    consultarAPI(ciudad);
  };

  return (
    <Container className="d-flex flex-column">
      <h1 className="text-light display-4 text-center mt-4">Web del clima</h1>
      <hr className="text-light" />
      <Formulario onSubmit={handleSubmit} consultarAPI={consultarAPI}></Formulario>
      {resultadosCargados && climaResultados.cod === 200 && (
        <Tarjeta climaResultados={climaResultados}></Tarjeta>
      )}
      {resultadosCargados && climaResultados.cod !== 200 && (
        <Alert variant="danger" className="mt-5">
          No se encontraron datos de la ciudad ingresada
        </Alert>
      )}
    </Container>
  );
}

export default App;
