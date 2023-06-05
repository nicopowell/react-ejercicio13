import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ consultarAPI }) => {
  const [ciudad, setCiudad] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    consultarAPI(ciudad);
  };
  
  const handleChange = (e) => {
    setCiudad(e.target.value);
  };

  return (
    <Form className="text-light text-center" onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3 d-flex flex-column align-items-center px-5"
        controlId="inputCiudad"
      >
        <Form.Label className="fs-4">Ingrese una ciudad</Form.Label>
        <Form.Control
          type="text"
          maxLength={75}
          className="bg-dark text-light"
          required
          value={ciudad}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="px-5 py-2 fs-4">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;