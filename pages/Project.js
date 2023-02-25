import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import pj1 from '../assets/img/documentation/1.JPG'
import pj2 from '../assets/img/documentation/4.jpeg'
import pj3 from '../assets/img/documentation/5.JPG'

const Project = () => {
  return (
    <div>
        <NavBar />
        <div className='contact-bg'></div>
        <h1 className='text-services1'>Our Project</h1>
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={pj1} />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={pj2} />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 days ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={pj3} />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 month ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default Project