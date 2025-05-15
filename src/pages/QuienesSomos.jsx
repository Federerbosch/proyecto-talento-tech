import {React } from 'react';               
import { Container, Row, Col } from 'react-bootstrap';

const QuienesSomos = () => {
  return (
     <section className="bg-light py-5">
      <Container className="text-center">
        <h2 className="mb-4 text-primary">Sobre Nosotros</h2>
        <p className="lead mb-4">
          ¡Bienvenido a <strong>PokéComunidad</strong>! Somos entrenadores apasionados que desde 2020 compartimos la emoción de atrapar, entrenar y coleccionar Pokémon. Nuestro objetivo es crear un espacio donde puedas conectar con otros fans, aprender estrategias y disfrutar del mundo Pokémon.
        </p>

        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
              alt="Pikachu"
              className="img-fluid rounded-circle border border-warning"
              style={{ width: '150px' }}
            />
            <h5 className="mt-3 text-warning">Nuestra Energía</h5>
            <p>Al igual que Pikachu, ¡nuestra energía nunca se agota!</p>
          </Col>

          <Col md={4} className="mb-4">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              alt="Bulbasaur"
              className="img-fluid rounded-circle border border-success"
              style={{ width: '150px' }}
            />
            <h5 className="mt-3 text-success">Crecimiento</h5>
            <p>Como Bulbasaur, ¡crecemos juntos cada día!</p>
          </Col>

          <Col md={4} className="mb-4">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
              alt="Charmander"
              className="img-fluid rounded-circle border border-danger"
              style={{ width: '150px' }}
            />
            <h5 className="mt-3 text-danger">Pasión</h5>
            <p>¡Nuestro fuego por Pokémon nunca se apaga!</p>
          </Col>
        </Row>

        <p className="mt-4">¡Únete a nuestra aventura y atrápalos a todos con nosotros!</p>
      </Container>
    </section>
  );
};

export default QuienesSomos;