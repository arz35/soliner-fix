import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import service06 from '../assets/img/Services-06.jpg'

const SpecialServices = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='content-services'>
            <img src={service06} alt="No Internet Connection"/>
          </div>
        </Col>

        <Col>
          <div className='content-services'>
              <h3>Special Services</h3>
              <h5>SOLINER Also provides Special Services as following : </h5>
              <div className='list-materials'>
                <ul>
                  <li>Scaffolding Installation & Provision</li>
                  <li>Equipment Rental</li>
                  <li>Water Jetting</li>
                </ul>
                <ul>
                  <li>Transport & Heavy Transport</li>
                  <li>Inspection Services</li>
                  <li>Bolt Tightening & Cold Cutting</li>
                </ul>
              </div>
              <h5>Most of our product are in stock condition that fulfill high quality standars</h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SpecialServices