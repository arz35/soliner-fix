import React from 'react'
import logo1 from '../assets/img/brand-logo/Rotork.png';
import logo2 from '../assets/img/brand-logo/kem.png';
import logo3 from '../assets/img/brand-logo/Glt-Valves.png';
import logo4 from '../assets/img/brand-logo/MKI-Construction.png';
import logo5 from '../assets/img/brand-logo/MKI-Stevedoring.png';
import logo6 from '../assets/img/brand-logo/Hardness.png';
import { Container, Row, Col } from 'react-bootstrap';

const PartnerLayout = () => {
  return (
    <div>
        <Row>
            <Col>
                <Container className='partner-container'>
                    <img src={logo1} alt='logo' className='partner-logo' />
                </Container>
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo2} alt='logo' className='partner-logo' />
                </Container>            
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo3} alt='logo' className='partner-logo' />
                </Container>            
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo4} alt='logo' className='partner-logo' />
                </Container>            
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo5} alt='logo' className='partner-logo' />
                </Container>            
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo6} alt='logo' className='partner-logo' />
                </Container>            
            </Col>
        </Row>
    </div>
  )
}

export default PartnerLayout