import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import service10 from '../assets/img/Services-10.jpg'

const ManPower = () => {
  return (
    <Zoom>
    <div className='right'>
        <Row xs={1} md={2} lg={2}>
            <Col>
                <div className='content-description'>
                    <h3>Manpower Supply</h3>
                    <p>
                    Having experience of supplying & managing over 800 task force labor workers at once with a duration of more than 12 months in one of the largest project in Indonesia, SOLINER is well known for our commitment in supplying high quality labors which generates high discipline and high productivity workers.
                    </p>
                </div>
            </Col>

            <Col>
                <div className='content-thumbnail'>
                    <img src={service10} alt="No Internet Connection"/>
                </div>
            </Col>

        </Row>
    </div>
    </Zoom>
  )
}

export default ManPower