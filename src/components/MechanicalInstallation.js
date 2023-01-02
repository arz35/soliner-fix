import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service02 from '../assets/img/Services-02.jpg'

const MechanicalInstallation = () => {
  return (
    <div className='right'>
        <Zoom>
          <Row xs={1} md={2} lg={2}>
              <Col>
                  <div className='content-description'>
                      <h3>Mechanical Installation ( Static & Rotating )</h3>
                      <p>
                      SOLINER Provides Mechanical Installation services for all major static such as boilers, storage tanks, rotating equipments and Skids / packages. Our experience and from our team are reliable starting from Project Management, Construction Management to install, precommision and commission for all mechanical parts and scope.
                      </p>
                  </div>
              </Col>

              <Col>
                  <div className='content-thumbnail'>
                      <img src={service02} alt="No Internet Connection"/>
                  </div>
              </Col>
          </Row>
      </Zoom>
    </div>
  )
}

export default MechanicalInstallation