import React from 'react'
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import ScrollUp from '../../components/ScrollUp'
import { useState } from 'react'

const AssistantMarketing = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

  return (
    <div>
        <NavBar />
        <div className='contact-bg'></div>
        <Container className='career-info'>
            <Row>
                <Col>
                    <i class="fa-solid fa-building"></i>
                    <h3>Department</h3>
                    <h5>Information Technology</h5>
                </Col>
                <Col>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>Location</h3>
                    <h5>Jakarta, Indonesia</h5>
                </Col>
                <Col>
                    <i class="fa-solid fa-award"></i>
                    <h3>Education</h3>
                    <h5>MBA or Master's Degree</h5>
                </Col>
                <Col>
                    <i class="fa-solid fa-file"></i>
                    <h3>Experience</h3>
                    <h5>0 - 4 Years</h5>
                </Col>
            </Row>
        </Container>
        <Container className='job-detail'>
            <h2>Job Description</h2>
            <p>Distinctively fashion standardized communities vis-a-vis seamless applications. Authoritatively recaptiualize efficient supply chains without vertical initiatives. Progressively visualize strategic relationships with error-free processes. Credibly strategize fully tested outsourcing with functional e-markets. Dynamically evisculate user friendly architectures before cross-media experiences. Interactively disintermediate empowered data whereas distinctive human capital. Compellingly utilize.</p>
            <p>Dynamically utilize intermandated materials through customized process improvements. Conveniently recaptiualize adaptive leadership before long-term high-impact functionalities. Completely incubate customer directed meta-services after economically sound imperatives. Distinctively evolve diverse applications for enterprise processes. Monotonectally disintermediate functionalized solutions rather than progressive leadership.</p>

            <h2>Responsibilities</h2>
            <ul>
                <i class="fa-solid fa-circle-dot"></i>
                <li>He as compliment unreserved projecting. Between had observe pretend delight for believe</li>
                <i class="fa-solid fa-circle-dot"></i>
                <li>He as compliment unreserved projecting. Between had observe pretend delight for believe</li>
                <i class="fa-solid fa-circle-dot"></i>
                <li>He as compliment unreserved projecting. Between had observe pretend delight for believe</li>
                <i class="fa-solid fa-circle-dot"></i>
                <li>He as compliment unreserved projecting. Between had observe pretend delight for believe</li>
                <i class="fa-solid fa-circle-dot"></i>
                <li>He as compliment unreserved projecting. Between had observe pretend delight for believe</li>
                <i class="fa-solid fa-circle-dot"></i>
                <li>He as compliment unreserved projecting. Between had observe pretend delight for believe</li>
            </ul>
        </Container>
        <div className='apply-button'><button onClick={handleShow}>Apply This Job</button></div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Control as="textarea" rows={3} placeholder="Message" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        <Footer />
        <ScrollUp />
    </div>
  )
}

export default AssistantMarketing