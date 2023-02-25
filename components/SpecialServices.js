import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import special1 from '../assets/img/spesial-services-01.jpg'
import special2 from '../assets/img/spesial-services-02.jpg'
import special3 from '../assets/img/spesial-services-03.jpg'
import special4 from '../assets/img/spesial-services-04.jpg'
import special5 from '../assets/img/spesial-services-05.jpg'
import special6 from '../assets/img/spesial-services-06.jpg'

const SpecialServices = () => {
  return (
    <Zoom>
      <Container className='servicesContent'>
          <h3>Special Services</h3>
          <Col>
            <div className='container-document-1'>
              <Row xs={2} md={3} className='documentation-wrapper-1'>
                <div className='documentation-1'>
                  <img src={special1} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={special2} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={special5} />
                  <div className='D-overlay-1'></div>
                </div>
                
                <div className='documentation-1'>
                  <img src={special3} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={special4} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={special6} />
                  <div className='D-overlay-1'></div>
                </div>
              </Row>
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