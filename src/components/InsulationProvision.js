import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service11 from '../assets/img/Services-11.jpg'

const InsulationProvision = () => {
  return (
    <div className='left'>
        <Zoom>
        <Row xs={1} md={2} lg={2}>
                <Col>
                    <div className='content-thumbnail'>
                        <img src={service11} alt="No Internet Connection"/>
                    </div>
                </Col>

            <Col>
                <div className='content-description-2'>
                    <h3>Insulation Provision & Works</h3>
                    <p>
                    SOLINER Provides Provision, fabrication and Installation services in hot and cold insulation. Local and International brand of insulation products are available. Experienced mostly in the oil & gas sector, SOLINER has experience in insulating Piping systems and storage tanks.
                    </p>
                </div>
            </Col>
        </Row>
        </Zoom>
    </div>
  )
}

export default InsulationProvision