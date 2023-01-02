import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service09 from '../assets/img/Services-09.jpg'

const ScaffoldingInstallation = () => {
  return (
      <div className='left'>
        <Zoom>
        <Row xs={1} md={2} lg={2}>
                <Col>
                    <div className='content-thumbnail'>
                        <img src={service09} alt="No Internet Connection"/>
                    </div>
                </Col>

            <Col>
                <div className='content-description-2'>
                    <h3>Scaffolding Installation</h3>
                    <p>
                    Not Only to support our own work , SOLINER provides Provision, rent and installation services for Scaffolding of BS or JIS Standards which is commonly used in the Industry. Our work force including scaffolding supervisors and Inspectors have many experiences in providing safe, efficient scaffolding designs and sequence.
                    </p>
                </div>
            </Col>
        </Row>
        </Zoom>
    </div>
  )
}

export default ScaffoldingInstallation