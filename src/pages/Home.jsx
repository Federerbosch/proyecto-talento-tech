import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Paso 1: Obtener lista de Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')               
      .then(res => res.json())                  
      .then(async data => {               
        // Paso 2: Obtener detalles de cada Pokémon individual
        const detalles = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const datos = await res.json();
            return {
              id: datos.id,
              name: datos.name,
              image: datos.sprites.front_default,
              button: 'Agregar al carrito',
            };
          })
        );
        setPersonajes(detalles);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar los personajes:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center">Bienvenidos a la Pokebola</h1>
      {loading ? (
        <h3 className="text-center">Cargando...</h3>
      ) : (
        <Row>
          {personajes.map(char => (
            <Col key={char.id} md={4} className="text-center">
              <Card className="m-2">
                <Card.Img
                  className="text-center"
                  src={char.image}
                  style={{ maxHeight: '350px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{char.name}</Card.Title>
                  <button className="btn btn-success " style={{ width: '100%' }} onClick={() => alert(`Este es el pokemon ${char.name}`)}>
                    Ver mar
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
