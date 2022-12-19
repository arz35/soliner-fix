import React from 'react'
import { Zoom, Fade } from 'react-reveal'
import { Container, Row, Col } from 'react-bootstrap'
import service01 from '../assets/img/Services-01.jpg';
import service02 from '../assets/img/Services-02.jpg';
import service03 from '../assets/img/Services-03.jpg';
import service04 from '../assets/img/Services-04.jpg';
import service05 from '../assets/img/Services-05.jpg';
import service06 from '../assets/img/Services-06.jpg';

const ServicesLayout = () => {
  return (
    <div>
        <Fade bottom cascade>
            <Container className='services-layout'>
                <div className='text-services'>Our Services</div>
                <Row xs={1} md={2} xl={2}>
                    <Fade left delay={200}>
                    <Col>
                        <div className='content-wrapper'>
                        <img src={service01} alt="No Internet Connection"/>
                        <div className='overlay'>
                            <div className='text-content'>Piping Fabrication & Installation</div>
                        </div>
                        </div>
                    </Col>
                    </Fade>

                    <Fade right delay={800}>
                    <Col>
                        <div className='content-wrapper'>
                        <img src={service02} alt="No Internet Connection"/>
                        <div className='overlay'>
                            <div className='text-content'>Mechanical & Installation</div>
                        </div>
                        </div>
                    </Col>
                    </Fade>

                    <Fade left delay={200}>
                    <Col>
                        <div className='content-wrapper'>
                        <img src={service03} alt="No Internet Connection"/>
                        <div className='overlay'>
                            <div className='text-content'>Heavy Lifting</div>
                        </div>
                        </div>
                    </Col>
                    </Fade>

                    <Fade right delay={800}>
                    <Col>
                        <div className='content-wrapper'>
                        <img src={service04} alt="No Internet Connection"/>
                        <div className='overlay'>
                            <div className='text-content'>Civil Engineering</div>
                        </div>
                        </div>
                    </Col>
                    </Fade>

                    <Fade left delay={200}>
                    <Col>
                        <div className='content-wrapper'>
                        <img src={service05} alt="No Internet Connection"/>
                        <div className='overlay'>
                            <div className='text-content'>Procurement Services & General Supplies</div>
                        </div>
                        </div>
                    </Col>
                    </Fade>

                    <Fade right delay={800}>
                    <Col>
                        <div className='content-wrapper'>
                        <img src={service06} alt="No Internet Connection"/>
                        <div className='overlay'>
                            <div className='text-content'>Special Services</div>
                        </div>
                        </div>
                    </Col>
                    </Fade>
                </Row>
                <div className='detail'>
                    <a href='/services'>Go For Detail</a>
                </div>
            </Container>
        </Fade>
    </div>
  )
}

export default ServicesLayout