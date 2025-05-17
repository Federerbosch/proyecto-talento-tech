import React, { useState } from 'react';
import SidebarFilter from "../components/SidebarFilter";
import ProductGrid from "../components/ProductGrid";
import { Container, Row, Col } from 'react-bootstrap';  

function Tienda() {
  const [selectedType, setSelectedType] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container className="mt-5">
      <h3 className="text-success fw-bold">Tienda Pokémon</h3>
      <p className="text-muted border-bottom mb-5"><small>INICIO / TIENDA / POKÉMON</small></p>

      {/* 🔍 Barra de búsqueda */}
      <div className="d-flex justify-content-end mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar Pokémon por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Row className="mt-3">
        <Col md={3}>
          <SidebarFilter setSelectedType={setSelectedType} />
        </Col>
        <Col md={9}>
          <ProductGrid selectedType={selectedType} searchTerm={searchTerm} />
        </Col>
      </Row>
    </Container>
  );
}

export default Tienda;
