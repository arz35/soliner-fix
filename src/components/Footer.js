import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../assets/img/logo3.png'
import { Zoom } from 'react-reveal';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo}/>
            </a>
            <a href='#' className="my-3">
               <i className='fa fa-location-dot'></i> Jl TB Simatupang Kav 89G 19th<br/> Floor Jakarta Selatan – DKI Jakarta
            </a>
            <span className="navbar-text">
              <div className="social-icon">
                <Zoom delay={1000}>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </Zoom>

                <Zoom delay={1100}>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </Zoom>                

                <Zoom delay={1200}>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </Zoom>
              </div>
            </span>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', marginTop: '50px' }}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/" className="link-footer">Resources</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">About Us</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">Contact</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', marginTop: '50px' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/" className="link-footer">Support</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', marginTop: '50px' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/" className="link-footer">Windframe</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">Loop</CDBFooterLink>
              <CDBFooterLink href="/" className="link-footer">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Emil, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};