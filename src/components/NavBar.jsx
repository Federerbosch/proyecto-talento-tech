import {React} from 'react';
import {Link} from 'react-router-dom';  
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="border-bottom">
      <Container expand="md" className="py-3">
        <Row className="align-items-center">
          <Col xs={6} md={4}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Microsoft_Loop_icon.svg/1024px-Microsoft_Loop_icon.svg.png"
              alt="Logo"
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
          </Col>
          <Col xs={6} md={8} className="d-flex justify-content-end gap-4">
            <FaSearch size={20} />
            <FaUser size={20} />
            <FaShoppingCart size={20} />
          </Col>
        </Row>
      </Container>

    <Navbar bg="light" expand="md" className="border-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='w-100 justify-content-between d-flex px-5'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/quienessomos">Quienes Somos</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}



export default NavBar;