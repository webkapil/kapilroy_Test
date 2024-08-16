import React from 'react'
import { Row, Col, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      <footer>
        <div className='footer1' style={{
          backgroundImage: "url('../assets/map_image.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Container>
            <Row>
              <Col lg={7} >
                <div className='foot'>
                  <Row>
                    <Col md={6} >
                      <h3>Better yet, see us in person!</h3>
                      <p>We love our customers, so feel free to visit during normal business hours.
                        Coachs Chassis</p>
                    </Col>
                    <Col md={6} >
                      <h3>Contact Info</h3>

                      <Nav>
                        <Nav><i class="bi bi-geo-alt-fill"></i> 2605 Caton Hill Road, Woodbridge, VA 22192</Nav>
                        <Nav.Link href="tel:1-800-1234567"><i class="bi bi-telephone-fill"></i> 1-800-1234567</Nav.Link>
                        <Nav.Link href="mailto:officeone@youremail.com"><i class="bi bi-envelope-fill"></i> officeone@youremail.com</Nav.Link>
                      </Nav>


                    </Col>
                    <Col md={6} className='mt-4'>
                      <p>Call if you need to arrange for after hours assistance. 505-235-3439
                      </p>
                    </Col>
                    <Col md={6} className='mt-4'>
                      <h3>Opening</h3>
                      <p><i class="bi bi-clock"></i> Mon -Thu: 9:30 AM - 4:30 PM<br></br>
                        Fri - Sat: 9:00 AM - 2:30 PM<br></br>
                        Sunday: Closed</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='end_footer'>
          <Container>
            <Row>
              <Col xs={12} md={6} >
                <p>Copyright © 2024 Coachs Chassis - All Rights Reserved.</p>
              </Col>
              <Col xs={12} md={6} >
                <Link to="/about"><img src='../assets/icon1.svg' alt='icon1' /></Link>
                <Link to="/about"><img src='../assets/icon2.svg' alt='icon1' /></Link>
                <Link to="/about"><img src='../assets/icon3.svg' alt='icon1' /></Link>
                <Link to="/about"><img src='../assets/icon4.svg' alt='icon1' /></Link>
              </Col>

            </Row>
          </Container>
        </div>
      </footer>


    </div>
  )
}

export default Footer;
