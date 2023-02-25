import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'

const LandingPage = () => {
  return (
    <div className='bg-img'>
      <Fade>
        <h1>PT Solusi Industri Energi
          <div className='tagline'></div>
        </h1>
        <p>We provided Effective And Simple Solution For Your Industrial Needs</p>
        <div className='site-info'>
          <Row>
            <Col>
              <p>Phone</p>
              <p><i class="fa-solid fa-phone"></i>021 22787919</p>
            </Col>
            <Col>
              <p>Mail</p>
              <p><i class="fa-solid fa-envelope"></i>info@soliner.co.id</p>
            </Col>
            <Col>
              <p>Location</p>
              <p><i class="fa-solid fa-location-dot"></i>Jl TB Simatupang Kav 89G 19th Floor</p>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  )
}

export default LandingPage