import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service01 from '../assets/img/Services-01.jpg'

const PipingFabrication = () => {
  return (
      <div className='left'>
        <Zoom>
        <Row xs={1} md={2} lg={2}>
            <Col>
                <div className='content-thumbnail'>
                    <img src={service01} alt="No Internet Connection"/>
                </div>
            </Col>

            <Col>
                <div className='content-description-2'>
                    <h3>Piping Fabrication & Installation</h3>
                    <p>
                    SOLINER Provides provide piping fabrication and installation service for all kinds of needs in all energy sector. We have the capability to manage and execute large scale piping work up to 200.000 dia inch per year. SOLINER also has a piping fabrication yard in Cilegon – Banten Indonesia with an area of 3 Hectare. With our teams personal experience, SOLINER guarantees the quality, schedule and coordination of our work. With our team experience handling mega projects, our capability working in this area is not doubted.
                    </p>
                </div>
            </Col>
        </Row>
        </Zoom>
    </div>
  )
}

export default PipingFabrication