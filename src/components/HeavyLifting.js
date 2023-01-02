import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service03 from '../assets/img/Services-03.jpg'

const HeavyLifting = () => {
  return (
    <div className='right'>
      <Zoom>
        <Row xs={1} md={2} lg={2}>
            <Col>
                <div className='content-description'>
                    <h3>Heavy Lift</h3>
                    <p>
                      Partnering with a local and International heavy lift Company, SOLINER is capable and provide services in executing complexed lifting, heavy transport, and heavy lifting. We provide lifting services up to 3000 tons.
                    </p>
                </div>
            </Col>

            <Col>
                <div className='content-thumbnail'>
                    <img src={service03} alt="No Internet Connection"/>
                </div>
            </Col>
          </Row>
        </Zoom>
      </div>
  )
}

export default HeavyLifting