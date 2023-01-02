import React from 'react'
import { NavBar } from '../components/NavBar'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import ScrollUp from '../components/ScrollUp'

const Contact = () => {
  return (
    <div className='contact'>
      <NavBar />
      <div className='contact-bg'>
      </div>
      <h3 className='contact-title'>Contact Us</h3>
      <Row xs={1} lg={2}>
        <Container className='form-input'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        
        <Container className='contact-link'>
          <h1>Get In Touch</h1>
          <Col>
            <a href='https://www.google.com/maps/place/PT.+Solusi+Industri+Energi+(SOLINER)/@-6.3024687,106.8340742,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69edbcf64f2909:0x11a16b75e70b201c!8m2!3d-6.3024687!4d106.8362629'><i class="fa-solid fa-location-dot"></i>GKM Green Tower
Jl TB Simatupang <span>Kav 89G 19th Floor Jakarta Selatan, </span><span>DKI Jakarta</span></a>
            <p><i class="fa-solid fa-phone"></i>021 22787919 </p>
            <p><i class="fa-solid fa-envelope"></i>info@soliner.co.id </p>
          </Col>
        </Container>
      </Row>
      <iframe width="100%" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=pt%20soliner+(PT.%20Solusi%20Industri%20Energi%20(Soliner))&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default Contact