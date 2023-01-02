import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service07 from '../assets/img/Services-07.jpg'

const SteelStructure = () => {
  return (
      <div className='left'>
        <Zoom>
        <Row xs={1} md={2} lg={2}>
                <Col>
                    <div className='content-thumbnail'>
                        <img src={service07} alt="No Internet Connection"/>
                    </div>
                </Col>

            <Col>
                <div className='content-description-2'>
                    <h3>Steel Structure Fabrication & Installation</h3>
                    <p>
                    SOLINER Provides Fabrication & Installation provision and services for all steel structure such as pipe racks, Ware Houses or typical and Etc. Fabricating in our own yard in Cilegon, Our team has several years of experience in providing Project Management and execution of similar projects. Our maximum capacity per project is approximately 2000 tons / project.
                    </p>
                </div>
            </Col>
        </Row>
    </Zoom>
    </div>
  )
}

export default SteelStructure