import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import proc1 from '../assets/img/procurement-01.jpg'
import proc2 from '../assets/img/procurement-02.jpg'
import proc3 from '../assets/img/procurement-03.jpg'
import proc4 from '../assets/img/procurement-04.jpg'
import proc5 from '../assets/img/procurement-05.jpg'
import proc6 from '../assets/img/procurement-06.jpg'
import proc7 from '../assets/img/procurement-07.jpg'
import proc8 from '../assets/img/procurement-08.jpg'
import proc9 from '../assets/img/procurement-09.jpg'

const Procurement = () => {
  return (
    <Zoom>
      <Container className='servicesContent'>
          <h3>Procurement Services</h3>
          <Col>
          <div className='container-document-1'>
              <Row xs={2} md={3} className='documentation-wrapper-1'>
                <div className='documentation-1'>
                  <img src={proc1} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc2} />
                  <div className='D-overlay-1'></div>
                </div>
                
                <div className='documentation-1'>
                  <img src={proc3} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc4} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc5} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc6} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc7} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc8} />
                  <div className='D-overlay-1'></div>
                </div>

                <div className='documentation-1'>
                  <img src={proc9} />
                  <div className='D-overlay-1'></div>
                </div>
              </Row>
            </div>
          </Col>

          <Col>
            <div className='content-description-1'>
                <p>SOLINER Is an agent & distributor for varieties of Industrial  Bulk Materials such as : </p>
                <div className='list-materials-1'>
                  <ul>
                    <li>Gate. Globe, Check, Ball, Butterfly Valves of all kind of materials as requested. STOCK or Customized  ( International  or Local Product )</li>
                    <li>Pipes. STOCK or Customized  ( Carbon Steel, Stainless Steel and Alloy Steel ) International  or Local Product</li>
                    <li>Flanges. STOCK or Customized  ( Carbon Steel, Stainless Steel and Alloy Steel ) International  or Local Product</li>
                    <li>Fittings. STOCK or Customized  ( Carbon Steel, Stainless Steel and Alloy Steel ) International  or Local Product</li>
                    <li>Gaskets.  STOCK or Customized  (International  or Local Product )</li>
                  </ul>
                  <ul>
                    <li>Bolts & Nuts. STOCK or Customized  ( Stainless steel, carbon steel and low temperature steel )</li> 
                    <li>Control Valves. Shut down Valves & Actuator.</li>
                    <li>High Quality Wall Paint. Agent of product KEIM.</li>
                    <li>Cable Trays. STOCK or Customized  ( Local Product )</li>
                  </ul>
                </div>
            </div>
          </Col>
      </Container>
    </Zoom>
  )
}

export default Procurement