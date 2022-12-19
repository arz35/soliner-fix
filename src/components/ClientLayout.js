import React from 'react'
import logo1 from '../assets/img/brand-logo/RDMP-Balik-Papan.png';
import logo2 from '../assets/img/brand-logo/JGC.png';
import logo3 from '../assets/img/brand-logo/ENI.png';
import logo4 from '../assets/img/brand-logo/Kian-Santang.png';
import logo5 from '../assets/img/brand-logo/Rekayasa-Indonesia.png';
import logo6 from '../assets/img/brand-logo/JEL.png';
import logo7 from '../assets/img/brand-logo/Shaftindo-Energi.png';
import logo8 from '../assets/img/brand-logo/Adhi.png';
import logo9 from '../assets/img/brand-logo/Hema.png';
import { Container, Row, Col } from 'react-bootstrap';

const ClientLayout = () => {
  return (
    <div>
        <Row xs={2} md={4} lg={4}>
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

            <Col>
                <Container className='partner-container'>
                    <img src={logo7} alt='logo' className='partner-logo' />
                </Container>            
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo8} alt='logo' className='partner-logo' />
                </Container>            
            </Col>

            <Col>
                <Container className='partner-container'>
                    <img src={logo9} alt='logo' className='partner-logo' />
                </Container>            
            </Col>
        </Row>
    </div>
  )
}

export default ClientLayout