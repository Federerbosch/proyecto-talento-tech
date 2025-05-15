import {React} from 'react';
import {Link} from 'react-router-dom';  
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import Logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div>
      <Container expand="md" className="py-3">
        <Row className="align-items-center">
          <Col xs={6} md={4}>
        <Link to={"/"}>
          <img 
              src={Logo}	
              alt="Logo"
              style={{ width: '100px', cursor: 'pointer' }}
            />
        </Link>
          </Col>
          <Col xs={6} md={8} className="d-flex justify-content-end gap-4">

            <FaSearch size={20} />
            <Link to="/login" className="text-dark text-reset text-decoration-none">
              <FaUser size={20} />
            </Link>
            <Link to="/carrito" className="text-dark text-reset text-decoration-none">
              <FaShoppingCart size={20} />
            </Link>
          </Col>
        </Row>
      </Container>

    <Navbar className="border-bottom border-success" >
      <Container expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='w-100 justify-content-between d-flex px-5 py-2'>
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