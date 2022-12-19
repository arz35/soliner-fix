import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import service04 from '../assets/img/Services-04.jpg'

const CivilWorks = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
                <div className='content-services'>
                    <img src={service04} alt="No Internet Connection"/>
                </div>
            </Col>

            <Col>
                <div className='content-services'>
                    <h3>Civil Works</h3>
                    <p>
                      SOLINER provides Project Management, engineering and construction of civil work services such as earthworks, buildings, foundations and many other. With our team experience handling mega projects valued more than four million US dollars, our capability working in this area is not doubted.
                    </p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CivilWorks