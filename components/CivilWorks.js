import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service04 from '../assets/img/Services-04.jpg'

const CivilWorks = () => {
  return (
    <div className='left'>
        <Zoom>
        <Row xs={1} md={2} lg={2}>
            <Col>
                <div className='content-thumbnail'>
                    <img src={service04} alt="No Internet Connection"/>
                </div>
            </Col>

            <Col>
                <div className='content-description-2'>
                    <h3>Civil Works</h3>
                    <p>
                    SOLINER provides Project Management, engineering and construction of civil work services such as earthworks, buildings, foundations, Concreteing LNG storage tanks and many other.
                    </p>
                </div>
            </Col>
        </Row>
      </Zoom>
    </div>
  )
}

export default CivilWorks