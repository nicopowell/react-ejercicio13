import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="text-light text-center">
      <Form.Group className="mb-3 d-flex flex-column align-items-center" controlId="inputCiudad">
        <Form.Label className="fs-4">Ingrese una ciudad</Form.Label>
        <Form.Control type="text" maxLength={75} className="bg-dark text-light w-50" required/>
      </Form.Group>
      <Button variant="primary" type="submit" className="px-5 py-2 fs-4">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;