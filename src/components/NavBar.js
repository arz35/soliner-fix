import react from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, } from "react-bootstrap";
import { Zoom } from 'react-reveal';
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
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Zoom left cascade delay={500}>
          <Navbar.Brand href="/"><img src={logo} className='logo1' /></Navbar.Brand>
        </Zoom>
        <div className='nav-container'>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

                <Zoom cascade delay={700}>
                  <Nav.Link href="/services" id='services' className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>SERVICES
                    <div className='tagline'></div>
                  </Nav.Link>
                </Zoom>

                <Zoom cascade delay={800}>
                  <Nav.Link href="#about" id='about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT US
                    <div className='tagline'></div>
                  </Nav.Link>
                </Zoom>

                <Zoom cascade delay={900}>
                  <Nav.Link href="/contact" id='contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>CONTACT US
                    <div className='tagline'></div>
                  </Nav.Link>
                </Zoom>

                <Zoom cascade delay={1000}>
                  <Nav.Link href="/career" id='career' className={activeLink === 'career' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('career')}>CAREER
                    <div className='tagline'></div>
                  </Nav.Link>
                </Zoom>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  )
}
