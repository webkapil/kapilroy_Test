import React from 'react'
import { Container, Card, Button, Row, Col, Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>


      {/* slider */}
      <section className='slider' style={{
        backgroundImage: "url('../assets/slider_img.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container >
          <Carousel className='cor d-flex align-items-center justify-content-center'>

            <Carousel.Item>
              <h1>High Quality Race Car Repairs, Small or Large</h1>
              <Link className='callnow' to="#">Call now</Link>
            </Carousel.Item>

            <Carousel.Item>
              <h1>High Quality Race Car Repairs, Small or Large</h1>
              <Link className='callnow' to="#">Call now</Link>
            </Carousel.Item>

            <Carousel.Item>
              <h1>High Quality Race Car Repairs, Small or Large</h1>
              <Link className='callnow' to="#">Call now</Link>
            </Carousel.Item>

          </Carousel>
        </Container>
      </section>


{/* After_Hours */}
      <section className='After_Hours'>
        <Container>
          <Row className='text-sm-start align-items-center'>
            <Col sm={8} className='text-sm-start align-items-center d-md-flex gap-4'>
              <h4>After Hours
                <span>Drop-OFF</span></h4>
              <p>We realize that you lead a busy life, so we have made it easy for you to drop off your vehicle 24/7. </p>
            </Col>
            <Col sm={4} className='text-sm-end'>

              <Link className='get' to="#">Get Estimate</Link>
            </Col>
          </Row>
        </Container>
      </section>



      {/* parts_we_stock */}
      <section className='parts_we_stock'>
        <Container>
          <div className='heading'>
            <h2>Parts We Stock</h2>
            <p>We offer full service auto repair & maintenance</p>
            <img src='../assets/border.png' alt='border' className='mb-3 mt-2 mb-lg-5 mt-lg-3' />
          </div>

          <Row className='m-0'>
            <Col xs={6} sm={4} className='p-0'>
              <div className='set'>
                <h4>Body</h4>
                <p>Body - Fasteners</p>
                <h3>Maintenance</h3>
              </div>
            </Col>

            <Col xs={6} sm={4} className='p-0'>
              <div className='set p-0'>
                <div className='img1' style={{
                  backgroundImage: "url('../assets/part1.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div className='img1' style={{
                  backgroundImage: "url('../assets/part2.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </div>
            </Col>

            <Col xs={6} sm={4} className='p-0'>
              <div className='set'>
                <h4>Chassis</h4>
                <p>From Minor Chassis Repairs to Full Car Fabrication</p>
                <h3 style={{ color: "#fff" }}>Common</h3>
              </div>
            </Col>

            <Col xs={6} sm={4} className='p-0'>
              <div className='set' style={{ backgroundColor: "#F3F3F3", color: "#000" }}>
                <h4>Electrical</h4>
                <p>From minor repairs to full care wireing</p>
              </div>
            </Col>

            <Col xs={6} sm={4} className='p-0'>
              <div className='set' style={{ backgroundColor: "#FF4200" }}>
                <h4>Suspension</h4>
                <p>Rear Ends - Brakes - Springs - Shocks - Steering - Suspension - Wheels & Tires</p>
                <h3 style={{ color: "#fff" }}>Brake</h3>
              </div>
            </Col>

            <Col xs={6} sm={4} className='p-0'>
              <div className='set' style={{ backgroundColor: "#F3F3F3", color: "#000" }}>
                <h4>Carburation</h4>
                <p>Rear Ends - Brakes - Springs - Shocks - Steering - Suspension - Wheels & Tires</p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Repair_Services */}
      <section className='Repair_Services text-start' style={{
        backgroundImage: "url('../assets/repair_services.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container>
          <Row>
            <Col xs={12} md={4} >
              <div className='heading'>
                <h2>Repair Services<br />That <span>We Offer</span></h2>
                <img src='../assets/border.png' alt='border' className='mb-3 mt-2 mb-lg-5 mt-lg-3' />
                <p>We provide a full range of front end mechanical
                  repairs for all makes and models of cars, no matter
                  the cause. This includes everything from struts,
                  shocks, and tie rod ends to ball joints, springs, and
                  basically everything that is included in repairing the
                  front end of the vehicle.</p>
              </div>
              <Link className='book' to="#">Book an Appointment</Link>
            </Col>

            <Col sm={6} md={4} >
              <Nav className="flex-column">
                <Nav.Link href="/"><i class="bi bi-check2"></i> FREE Loaner Cars</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> FREE Shuttle Service</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> General Auto Repair & Maintenance</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Transmission Repair & Replacement</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Fuel System Repair</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Exhaust System Repair</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Engine Cooling System Maintenance</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Electrical Diagnostics</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Starting and Charging Repair</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Wheel Alignment</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> CV Axles</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Computer Diagnostic Testin</Nav.Link>
              </Nav>
            </Col>

            <Col sm={6} md={4} >
              <Nav className="flex-column">
                <Nav.Link href="/"><i class="bi bi-check2"></i> Manufacturer Recommended Service</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Brake Repair and Replacement</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Air Conditioning A/C Repair</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Tire Repair and Replacement</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Vehicle Preventative Maintenance</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> State Emissions Inspection</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Emission Repair Facility</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Tune Up</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Oil Change</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Brake Job / Brake Service</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Engine Cooling System Flush & Repair</Nav.Link>
                <Nav.Link href="/"><i class="bi bi-check2"></i> Steering and Suspension Work</Nav.Link>
              </Nav>
            </Col>
          </Row>

        </Container>

      </section>





      {/* How_It_Works */}
      <section className='How_It_Works ' style={{
        backgroundImage: "url('../assets/how_it_work_bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container>
          <div className='heading'>
            <h2>How It <span>Works</span></h2>
            <p>These few steps will help you understand how our service works</p>
          </div>



          <Row className='mt-3 mt-lg-4 mt-xl-5'>
            <Col xs={6} md={3} className='mb-3 mb-md-0'>
              <div className='img' style={{
                backgroundImage: "url('../assets/how_it_work1.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>
            </Col>
            <Col xs={6} md={3} className='mb-3 mb-md-0'>
              <div className='img' style={{
                backgroundImage: "url('../assets/how_it_work2.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>
            </Col>

            <Col xs={6} md={3} className='mb-3 mb-md-0'>
              <div className='img' style={{
                backgroundImage: "url('../assets/how_it_work3.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>
            </Col>

            <Col xs={6} md={3} className='mb-3 mb-md-0'>
              <div className='img' style={{
                backgroundImage: "url('../assets/how_it_work4.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>
            </Col>

          </Row>

        </Container>

      </section>



      {/* testi */}
      <section className='testi' id='Testimonials' style={{
        backgroundImage: "url('../assets/testibg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div className='user' style={{
                backgroundImage: "url('../assets/userimg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>

              </div>
              <h4><img src='../assets/koma.png' alt='koma' /></h4>
              <p>Told them to replace my belt tensioner due to frequent squeaking after replacing my
                belt. They looked around and said, “nope, take the belt back and ask for a new one
                under warranty”.. Charged me $12, and after installing a new belt, turns out they were </p>
              <h6>Rod N. Clay <span>Industrial photographer</span></h6>

            </Carousel.Item>

            <Carousel.Item>
              <div className='user' style={{
                backgroundImage: "url('../assets/userimg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>

              </div>
              <h4><img src='../assets/koma.png' alt='koma' /></h4>
              <p>Told them to replace my belt tensioner due to frequent squeaking after replacing my
                belt. They looked around and said, “nope, take the belt back and ask for a new one
                under warranty”.. Charged me $12, and after installing a new belt, turns out they were </p>
              <h6>Rod N. Clay <span>Industrial photographer</span></h6>

            </Carousel.Item>

            <Carousel.Item>
              <div className='user' style={{
                backgroundImage: "url('../assets/userimg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              </div>
              <h4><img src='../assets/koma.png' alt='koma' /></h4>
              <p>Told them to replace my belt tensioner due to frequent squeaking after replacing my
                belt. They looked around and said, “nope, take the belt back and ask for a new one
                under warranty”.. Charged me $12, and after installing a new belt, turns out they were </p>
              <h6>Rod N. Clay <span>Industrial photographer</span></h6>
            </Carousel.Item>

          </Carousel>

        </Container>
      </section>




      {/* About_Coachs */}
      <section className='About_Coachs text-start '>
        <Container>

          <Row >
            <Col md={6}>
              <h3>About Coachs Chassis</h3>
              <p>Tom and Ruth Brooks, Married 55 Years, Have Been Involved in Auto Racing from The Albuquerque, NM And Los Lunas, New Mexico Areas For Over 50 Years. They Began Their Adult Lives Both as Teachers with The Albuquerque Public Schools. In 1977, Their Hobby as Race Car Owners Evolved into A Retail and Manufacturing Business Which Provides Parts, Repairs and Fabrication for Auto Race Cars, mostly "Dirt Cars". The Many Divisional Types of Cars Are Built in House to the Owner's Desired Level of Completion. H Business, Coach's Chassis, Was Operated After Hours, Weekends and Summers Around Their Teaching and Coaching Schedules. They Were Able to Operate Coach's Chassis Full Time After Their Retirements from Teaching In 1995. Except For The Time From 2010 And 2015, They Have Continued to Own and Operate A "House Car" Late Model with Multiple Drivers. Several Of Those Drivers Have Given Coach's Chassis Track Championships in Addition to Many Season Top Threes. When not Points Racing, The Brooks Have Raced All Over the Southwest, Gone as Far East as Arkansas, West as Arizona and North as Colorado. Yes, And as Far South as Juarez, Mexico in Addition to Most Of New Mexico's Tracks. Now Operating Out of Los Lunas, Coach's Chassis Knows Race Cars of Many Types.</p>
            </Col>

            <Col md={6}>
              <img className='w-100' src='../assets/about_coachs_chassis.svg' alt='coachs_chassis' />
            </Col>
          </Row>

          <Row className='mt-3 mt-lg-4 mt-xl-5'>
            <Col md={6}>
              <img className='w-100' src='../assets/coachs_chassis.svg' alt='coachs_chassis' />
            </Col>

            <Col md={6}>
              <h3>Coach's Chassis</h3>
              <p>Racing shop established in 1977 now In Valenica County. Coach’s Chassis provides high quality race car repairs, small or large. Many of the parts necessary for those repairs are on site. If ordering is necessary, those parts can be here. In two to three days. Our mission is to get you back on track. We do roll cages. Interested in a brand new Modified or late Model? Our jigs can get you started or take you to a finished product.</p>
            </Col>
          </Row>
        </Container>
      </section>


    </div>
  )
}

export default Home
