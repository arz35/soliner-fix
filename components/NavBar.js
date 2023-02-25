import react from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Button, Form, Container } from "react-bootstrap";
import { Fade, Zoom } from 'react-reveal';
import logo from '../assets/img/logo3.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
<>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={scrolled ? "scrolled" : ""}>
          <Container fluid>
            <Navbar.Brand href="/"><span className='a-logo'><img src={logo} /></span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Zoom cascade delay={700}>
                  <Nav.Link href="/about" id='about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT US</Nav.Link>
                </Zoom>

                <Zoom cascade delay={800}>
                  <Nav.Link href="/services" id='services' className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>SERVICES</Nav.Link>
                </Zoom>

                <Zoom cascade delay={900}>
                  <Nav.Link href="/career" id='career' className={activeLink === 'career' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('career')}>CAREER</Nav.Link>
                </Zoom>

                <Zoom cascade delay={1000}>
                  <Nav.Link href="/contact-us" id='contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>CONTACT US</Nav.Link>
                </Zoom>

                <Zoom cascade delay={1100}>
                  <Nav.Link href="/project" id='project' className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>PROJECT PHOTOS</Nav.Link>
                </Zoom>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
