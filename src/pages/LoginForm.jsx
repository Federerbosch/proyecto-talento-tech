import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de validación
    if (email === 'usuario@ejemplo.com' && password === '1234') {
      alert('¡Inicio de sesión exitoso!');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ maxWidth: '400px' }}>
      <Row>
        <Col>
          <Card className="p-4 shadow rounded-4 border-0 p-5">
            <Card.Body>
              <h3 className="text-center mb-4">Iniciar Sesión</h3>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    className='w-100'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Iniciar Sesión
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
