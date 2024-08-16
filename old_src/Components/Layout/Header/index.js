import React from 'react'
import { Row, Col, Container, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

      <header className='header'>
      <Container>

        <div className='mainhed' style={{
        backgroundImage: "url('../assets/heder_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='head'>
      
           <Row className='d-flex align-items-end'>
        <Col md={4} className='text-start'>
        <img className='logo'  src="./assets/logo.svg" alt='logo'/>
        </Col>
        <Col md={8}>
        <ul className='mb-0 d-flex p-0 justify-content-end'>
  <li>Schedule Your Appointment Today</li>
    <li><Link to="/">1-<span>800</span>-123-4567</Link></li>
    <li><Link to="/"><img  src="./assets/cart.svg" alt='cart'/></Link></li>
  </ul>
  </Col>
      </Row>
      </div>



</div>



      <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" >
  <Nav className="me-auto mb-0 d-flex justify-content-start p-0">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/about">About Us</Nav.Link>
    <Nav.Link href="/services">Services</Nav.Link>
    <Nav.Link href="/pricing">Pricing & Coupons</Nav.Link>
    <Nav.Link href="/plog">Blog</Nav.Link>
    <Nav.Link href="/gallery">Gallery</Nav.Link>
    
    <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
    <Nav.Link href="/FAQ">FAQ</Nav.Link>
    <Nav.Link href="/Shop">Shop</Nav.Link>
    <Nav.Link href="/Contacts">Contacts</Nav.Link>
 
  </Nav>
</Navbar.Collapse>
<Button><img  src="./assets/search.png" alt='search'/></Button>
</Navbar>




      </Container>
       
      
    </header>


    </div>
  )
}

export default Header;
