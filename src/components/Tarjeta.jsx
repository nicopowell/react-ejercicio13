import React from 'react';
import { Card } from 'react-bootstrap';
import './tarjeta.css'

const Tarjeta = () => {
  return (
    <Card className='p-4 m-5 tarjeta align-self-center'>
      <Card.Body className='text-center'>
        <Card.Title className="mb-2 text-muted">Ciudad, país</Card.Title>
        <Card.Subtitle className="mb-2 fs-2">0°C</Card.Subtitle>
        <i></i>
        <Card.Text>
          Clima
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;