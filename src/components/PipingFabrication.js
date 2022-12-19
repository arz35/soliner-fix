import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import service01 from '../assets/img/Services-01.jpg'

const PipingFabrication = () => {
  return (
    <Container>
        <Row>
            <Col>
                <div className='content-services'>
                    <img src={service01} alt="No Internet Connection"/>
                </div>
            </Col>

            <Col>
                <div className='content-services'>
                    <h3>Piping Fabrication & Installation</h3>
                    <p>
                        We provide piping fabrication and installation service for all kinds of needs in all energy sector. We have the capability to manage and execute large scale piping work up to 200.000 dia inch per year. SOLINER also has a piping fabrication yard in Cilegon – Banten Indonesia with an area of 3 Hectare. With our teams personal experience, SOLINER guarantees the quality, schedule and coordination of our work.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default PipingFabrication