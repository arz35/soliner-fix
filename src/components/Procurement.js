import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import service05 from '../assets/img/Services-05.jpg'

const Procurement = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='content-services'>
            <img src={service05} alt="No Internet Connection"/>
          </div>
        </Col>

        <Col>
          <div className='content-services'>
              <h3>Procurement Services</h3>
              <p>SOLINER Is an agent & distributor for varieties of Industrial  Bulk Materials such as : </p>
              <div className='list-materials'>
                <ul>
                  <li>Valves</li>
                  <li>Pipes</li>
                  <li>Fitting</li>
                  <li>Gaskets</li>
                  <li>Bolt & Nut</li>
                </ul>
                <ul>
                  <li>Actuator</li>
                  <li>Instrument Cables</li>
                  <li>Solar Lighting</li>
                  <li>Paint</li>
                  <li>Allow Materials</li>
                </ul>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Procurement