import { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import "./tarjeta.css";

const Tarjeta = ({ climaResultados }) => {
  const [urlIcono, setUrlIcono] = useState("");

  useEffect(() => {
    if (climaResultados.weather && climaResultados.weather.length > 0) {
      const iconCode = climaResultados.weather[0].icon;
      setUrlIcono(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    }
  }, [climaResultados]);

  return (
    <Card className="p-4 m-5 tarjeta align-self-center">
      <Card.Body className="text-center">
        <Card.Title className="mb-2 text-muted">
          {climaResultados.name}, {climaResultados.sys.country}
        </Card.Title>
        <Card.Subtitle className="mb-2 fs-2">{climaResultados.main.temp}°C</Card.Subtitle>
        <Image src={urlIcono} />
        <Card.Text>
          {climaResultados.weather[0].description.charAt(0).toUpperCase() +
            climaResultados.weather[0].description.slice(1)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;
