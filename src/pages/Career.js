import React from 'react'
import { NavBar } from '../components/NavBar'
import { Fade } from 'react-reveal'
import { Col, Container, Row } from 'react-bootstrap'
import thumbnail1 from '../assets/img/documentation/1.JPG'
import thumbnail2 from '../assets/img/documentation/2.jpg'
import thumbnail3 from '../assets/img/documentation/3.JPG'
import thumbnail4 from '../assets/img/documentation/4.jpeg'
import { Footer } from '../components/Footer'
import ScrollUp from '../components/ScrollUp'


const Career = () => {
  return (
    <div>
        <NavBar />
        <div className='bg-career'>
          <Fade>
            <h1>Careers
              <div className='tagline'></div>
            </h1>
            <p>Holisticly brand sustainable solutions rather than clicks-and-mortar applications.</p>
            <p>Phosfluorescently whiteboard fully tested initiatives.</p>
          </Fade>
        </div>
        <Container className='career-content'>
          <h1>Join Us</h1>
          <Row>
            <Col>
              <a href='sector-1'>
                <div className='career-wrapper'>
                  <h3>Contracting</h3>
                  <h5>1 Position</h5>
                </div>
              </a>

              <a href='sector-4'>
                <div className='career-wrapper'>
                  <h3>Information Technology</h3>
                  <h5>1 Position</h5>
                </div>
              </a>
            </Col>

            <Col>
              <a href='sector-2'>
                <div className='career-wrapper'>
                  <h3>Discipline Engineering</h3>
                  <h5>2 Position</h5>
                </div>
              </a>

              <a href='sector-5'>
                <div className='career-wrapper'>
                  <h3>Marketing</h3>
                  <h5>1 Position</h5>
                </div>
              </a>
            </Col>

            <Col>
              <a href='/sector-3'>
                <div className='career-wrapper'>
                  <h3>Finance</h3>
                  <h5>2 Position</h5>
                </div>
              </a>

              <a href='sector-6'>
                <div className='career-wrapper'>
                  <h3>Production Engineering</h3>
                  <h5>1 Position</h5>
                </div>
              </a>
            </Col>
          </Row>
          <h1>Come Work With Us</h1>
          <Row className='row2' md={1} lg={2}>
            <Col className='col1'>
              <h3>Our Culture</h3>
              <h5>Embrace orthogonal bandwidth after backward compatible process improvements.</h5>
              <p>Interactively fashion functional action items after 24/365 results. Dynamically redefine world-class metrics without leading-edge markets. Progressively orchestrate enabled "outside the box" thinking via scalable quality vectors. Objectively unleash optimal core competencies.</p><br/>
              <p>Interactively fashion functional action items after 24/365 results. Dynamically redefine world-class metrics without leading-edge markets. Progressively orchestrate enabled "outside the box" thinking via scalable quality vectors. Objectively unleash optimal core competencies.</p>
            </Col>

            <div className='container-document'>
              <div className='documentation-wrapper'>
                <div className='documentation'>
                  <img src={thumbnail1} />
                  <div className='D-overlay'></div>
                </div>

                <div className='documentation'>
                  <img src={thumbnail2} />
                  <div className='D-overlay'></div>
                </div>
              </div>

              <div className='documentation-wrapper'>
                <div className='documentation'>
                  <img src={thumbnail3} />
                  <div className='D-overlay'></div>
                </div>

                <div className='documentation'>
                  <img src={thumbnail4} />
                  <div className='D-overlay'></div>
                </div>
              </div>
            </div>
          </Row>
          <h1>Life At SOLINER</h1>
          <Row className='row3'>
            <Col>
              <i class="fa-solid fa-flask"></i>
              <h3>Global Operations</h3>
              <h5>Energistically scale multimedia based services whereas flexible</h5>
            </Col>

            <Col>
              <i class="fa-solid fa-gas-pump"></i>
              <h3>Shell Bussines</h3>
              <h5>Travelling alteration impression six all uncommonly</h5>
            </Col>

            <Col>
              <i class="fa-solid fa-bottle-droplet"></i>
              <h3>Diversity & Inclusion</h3>
              <h5>Travelling alteration impression six all uncommonly</h5>
            </Col>

            <Col>
              <i class="fa-solid fa-sailboat"></i>
              <h3>Experienced Proffesionals</h3>
              <h5>Energistically scale multimedia based services whereas flexible</h5>
            </Col>
          </Row>
          <h1>Open Positions</h1>
          <Col className='col3'>
            <div className='positions'>
              <div className='job'>
                <h3>Associate Admin. Customer Services</h3>
                <div className='job-description'>
                  <h5>Full Time</h5>
                  <h5>Remote</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='/job-1'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>

            <div className='positions'>
              <div className='job'>
                <h3>Credit Assessment Manager</h3>
                <div className='job-description'>
                  <h5>Remote</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='job-2'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>

            <div className='positions'>
              <div className='job'>
                <h3>Legal Counsel - Patent</h3>
                <div className='job-description'>
                  <h5>Part Time</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='job-3'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>

            <div className='positions'>
              <div className='job'>
                <h3>Procces Engineer</h3>
                <div className='job-description'>
                  <h5>Full Time</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='job-4'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>

            <div className='positions'>
              <div className='job'>
                <h3>Construction OEM Bussines Development Manager</h3>
                <div className='job-description'>
                  <h5>Part Time</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='job-5'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>

            <div className='positions'>
              <div className='job'>
                <h3>Quality Assurance Specialist</h3>
                <div className='job-description'>
                  <h5>Remote</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='job-6'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>

            <div className='positions'>
              <div className='job'>
                <h3>Assistant Marketing Manager</h3>
                <div className='job-description'>
                  <h5>Full Time</h5>
                </div>
              </div>

              <div className='job2'>
                <div className='job-location'>
                  <h3>Jakarta</h3>
                  <h5>Indonesia</h5>
                </div>
                <a href='job-7'>
                  <button>View And Apply</button>
                </a>
              </div>
            </div>
          </Col>
        </Container>
        <Footer />
        <ScrollUp />
    </div>
  )
}

export default Career