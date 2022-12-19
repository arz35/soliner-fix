import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import service03 from '../assets/img/Services-03.jpg'

const HeavyLifting = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
                <div className='content-services'>
                    <img src={service03} alt="No Internet Connection"/>
                </div>
            </Col>

            <Col>
                <div className='content-services'>
                    <h3>Heavy Lifting</h3>
                    <p>
                      Partnering with a local and International heavy lift Company, SOLINER is capable and provide services in executing complexed lifting, heavy transport, and heavy lifting. We provide lifting services up to 3000 tons.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default HeavyLifting