import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service05 from '../assets/img/Services-05.jpg'

const Procurement = () => {
  return (
    <Zoom>
      <Container className='servicesContent'>
          <h3>Procurement Services</h3>
          <Col>
            <div className='content-thumbnail-1'>
              <img src={service05} alt="No Internet Connection"/>
            </div>
          </Col>

          <Col>
            <div className='content-description-1'>
                <p>SOLINER Is an agent & distributor for varieties of Industrial  Bulk Materials such as : </p>
                <div className='list-materials-1'>
                  <ul>
                    <li>Gate. Globe, Check, Ball, Butterfly Valves of all kind of materials as requested. STOCK or Customized  ( International  or Local Product )</li>
                    <li> Pipes. STOCK or Customized  ( Carbon Steel, Stainless Steel and Alloy Steel ) International  or Local Product</li>
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