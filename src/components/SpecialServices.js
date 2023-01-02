import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service06 from '../assets/img/Services-06.jpg'

const SpecialServices = () => {
  return (
    <Zoom>
      <Container className='servicesContent'>
          <h3>Special Services</h3>
          <Col>
            <div className='content-thumbnail-1'>
              <img src={service06} alt="No Internet Connection"/>
            </div>
          </Col>

          <Col>
            <div className='content-description-1'>
                <h5>SOLINER Also provides Special Services as following : </h5>
                <div className='list-materials-1'>
                  <ul>
                    <li>Equipment Rental</li>
                    <li>Water Jetting</li>
                  </ul>
                  <ul>
                    <li>Bolt Tightening</li>
                    <li>Cold Cutting</li>
                    <li>Pre commissioning Services ( Hydro testing, Pneumatic testing, Pigging and Nitrogen Purging & preserving )</li>
                  </ul>
                </div>
                <h5>Most of our product are in stock condition that fulfill high quality standars</h5>
            </div>
          </Col>
      </Container>
    </Zoom>
  )
}

export default SpecialServices