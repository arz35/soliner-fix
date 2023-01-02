import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service08 from '../assets/img/Services-08.jpg'

const ElectricalAndInstrument = () => {
  return (
      <div className='right'>
        <Zoom>
        <Row xs={1} md={2} lg={2}>
            <Col>
                <div className='content-description'>
                    <h3>Electrical And Instrument</h3>
                    <p>
                    Not Only to support our own work , SOLINER provides Provision, rent and installation services for Scaffolding of BS or JIS Standards which is commonly used in the Industry. Our work force including scaffolding supervisors and Inspectors have many experiences in providing safe, efficient scaffolding designs and sequence.
                    </p>
                </div>
            </Col>

            <Col>
                <div className='content-thumbnail'>
                    <img src={service08} alt="No Internet Connection"/>
                </div>
            </Col>
        </Row>
    </Zoom>
    </div>
  )
}

export default ElectricalAndInstrument;