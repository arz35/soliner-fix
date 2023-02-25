import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { NavBar } from '../components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
import { Fade } from 'react-reveal';

const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4o9hjr', 'template_d1xhk4g', '#myForm', '9JjXVkPzAyNqW76CW')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent..!")
      }, (error) => {
          console.log(error.text);
          alert("Something Went Wrong!!!")
      });
  };

  return (
    <div className='contact'>
      <NavBar />
      <div className='contact-bg'>
      </div>
      <h3 className='contact-title'>Contact Us</h3>
      <Row xs={1} lg={2}>
          <Container className='contact-form'>
              <Col>
                <Fade>
                    <form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col size={24} sm={12} className="px-1">
                          <input type="text" name="user_name" placeholder="Your Name"/>
                        </Col>
                        <Col size={24} sm={12} className="px-1">
                          <input type="email" name="user_email" placeholder="Email Address"/>
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" name="message" placeholder="Message"></textarea>
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                      </Row>
                    </form>
                </Fade>
              </Col>
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