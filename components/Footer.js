import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../assets/img/logo3.png'
import { Zoom } from 'react-reveal';
import VisitorCounter from './VisitorCounter';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo}/>
            </a>
            <h5 href='#' className="my-3">
               <i className='fa fa-location-dot'></i> Jl TB Simatupang Kav 89G 19th<br/> Floor Jakarta Selatan – DKI Jakarta
            </h5>
            <span className="navbar-text">
              <div className="social-icon">
                <Zoom delay={1000}>
                  <a href='https://twitter.com/EnergiSolusi'><i class="fab fa-twitter"></i></a>
                </Zoom>

                <Zoom delay={1100}>
                  <a href="https://www.linkedin.com/in/soliner-indonesia-6938b525a/"><i class="fab fa-linkedin-in"></i></a>
                </Zoom>                

                <Zoom delay={1200}>
                  <a href="https://www.instagram.com/soliner_id/"><i class="fab fa-instagram"></i></a>
                </Zoom>
              </div>
            </span>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', marginTop: '50px' }}>
              Quick Link
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/about" className="link-footer">About Us</CDBFooterLink>
              <CDBFooterLink href="/services" className="link-footer">Services</CDBFooterLink>
              <CDBFooterLink href="/career" className="link-footer">Career</CDBFooterLink>
              <CDBFooterLink href="/contact" className="link-footer">Contact</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', marginTop: '50px' }}>
              Our Services
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/services" className="link-footer">Services</CDBFooterLink>
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