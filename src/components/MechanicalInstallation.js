import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import service02 from '../assets/img/Services-02.jpg'

const MechanicalInstallation = () => {
  return (
    <Container>
        <Row>
            <Col>
                <div className='content-services'>
                    <img src={service02} alt="No Internet Connection"/>
                </div>
            </Col>

            <Col>
                <div className='content-services'>
                    <h3>Mechanical Installation</h3>
                    <p>
                      We Provide Mechanical Installation services for all major static and rotating equipment. Our experience and from our team are reliable to install, precommision and commission all mechanical parts and scope.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default MechanicalInstallation