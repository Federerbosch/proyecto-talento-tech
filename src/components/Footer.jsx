import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGlobe,
  FaRss,
  FaCloud,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import Logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

function Footer() {
  return (
    <footer className="bg-whith text-center p-5 mt-5 border-top border-success ">
      <Container>
        <Row className="justify-content-center">
            <Col md={2} className="mb-3 d-flex flex-column align-items-start">
            <h6 className="fw-bold">NAVEGACION</h6>
            <ul className="list-unstyled d-flex flex-column  align-items-start">
              <li>Hogar</li>
              <li>Tienda</li>
              <li>Sobre Nosotros</li>
            </ul>
          </Col>
          <Col md={2} className="d-none d-md-block mb-3 ">
            <div className="border-end h-100 mx-auto" style={{ borderColor: 'green', borderWidth: '10px' }}>
              <div className='d-flex flex-column align-items-end pl-2'>
                <FaInstagram style={{ fontSize: '24px' }} className="me-3 d-block mb-3"/>
                <FaFacebook style={{ fontSize: '24px' }} className="me-3 d-block mb-3" />  
              </div>
            </div>
          </Col>  

            <Col md={3} className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <FaGlobe className="me-2" />
              <span>Lavalle, Bs As, Argentina</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-2" />
              <span>correo@gmail.com</span>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col className='border-top border-success'>
            <p className='pt-3'>&copy; Se reserva los derechos de autor</p>
            <img
              src={Logo} // Asegurate de colocar la ruta correcta
              alt="Logo"
              style={{ width: '60px', marginTop: '5px' }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;