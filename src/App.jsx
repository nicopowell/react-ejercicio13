import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Formulario from "./components/Formulario";
import Tarjeta from "./components/Tarjeta";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="d-flex flex-column">
      <h1 className="text-light display-4 text-center mt-4">Web del clima</h1>
      <hr className="text-light"/>
      <Formulario></Formulario>
      <Tarjeta></Tarjeta>
    </Container>
  )
}

export default App
