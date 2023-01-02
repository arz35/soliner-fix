import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBar } from '../components/NavBar'
import bg from '../assets/img/img39.jpg'
import { Footer } from '../components/Footer'
import { Fade } from 'react-reveal'
import structure from '../assets/img/structure.png'
import yard from '../assets/img/yard.jpeg'
import ScrollUp from '../components/ScrollUp'
import Gallery from '../components/Gallery'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='contact-bg'>
      </div>
      <h3 className='contact-title'>Who we are</h3>
      <h1 className='about-tagline'>"We Deliver Industrial Solutions"</h1>
      <Container className='about-us'>
        <Row xs={1} lg={2}>
          <Col>
            <div id='zoom-in'>
              <figure>
                <img src={bg} className='img39' />
              </figure>
            </div>
          </Col>

          <Col>
            <h1>PT. Solusi Industri Energi</h1>
            <p>was established on the basis of the growth of the construction and industrial sectors in Indonesia which experienced a surge in value that continues to rise. And the construction sector in Indonesia has grown 7-8 percent. One of the causes is due to the high demand for packaging and the high growth of the industrial sector in several major cities throughout Indonesia. On that basis, SOLINER contributes to advance the construction sector in Indonesia to be better in the future.</p>
            <p>Our commitment in every service Engineering procurement and construction is the satisfaction of partners or customers, to realize the commitment We provide quality products and a team of experienced experts and professionals in their fields. Every service we provide will be monitored and done by experts who are competent and experienced in running the project.</p>
            <a href='https://soliner.co.id/data/Company%20Profile.zip"' className='compro'><button><i class="fa-solid fa-arrow-down"></i>Company Profile</button></a>
          </Col>
        </Row>

        <h3 className='contact-title'>Why choose us</h3>
        <h1 className='about-tagline'>"Our Vision & Mission"</h1>

        <Row>
          <Col>
            <Fade left delay={400}>
              <div className='left-card'>
                <i class="fa-solid fa-eye"></i>
                <h3>Our Vision</h3>
                <ul>
                  <li>To be a reliable and reliable EPC company, operational excellence and sustainable growth.</li>
                </ul>
              </div>
            </Fade>
          </Col>

          <Col>
            <Fade right delay={800}>
              <div className='right-card'>
                <i class="fa-solid fa-bullseye"></i>
                <h3>Our Mission</h3>
                <ul>
                  <li>Focus on the Company’s rapid and sustainable growth in achieving business objectives.</li>
                  <li>Optimize productivity through superior operations and Total Quality Management (“TQM”).</li>
                </ul>
              </div>
            </Fade>
          </Col>
        </Row>

        <h3 className='contact-title'>Why choose us</h3>
        <h1 className='about-tagline'>"Our Organization"</h1>
        <Fade>
          <div className='structure-img'>
            <img src={structure} />
          </div>
        </Fade>

        <h3 className='contact-title'>Why choose us</h3>
        <h1 className='about-tagline'>"Our Yard Facility"</h1>
        <p className='yard-text'>We have a 3 hectare land that has been Land Cleared ± 1.5 hectare. Currently is used to pool all our Equipment & tools used for work. Located at Jalan Lingkar ( Cilegon ). Yard could be used for fabrication of steel structure & piping.</p>

        <Fade>
          <div className='yard-image'>
            <img src={yard}></img>
          </div>
        </Fade>

        <h3 className='contact-title'>Our Gallery</h3>
        <Fade>
          <Gallery />
        </Fade>
      </Container>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default About