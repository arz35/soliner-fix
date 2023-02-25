import React from 'react'
import { Fade } from 'react-reveal'
import img35 from '../assets/img/img35.jpg'

const AboutLayout = () => {
  return (
    <div className='wrapper'>
        <img src={img35} alt="" className='img35'/>
        <Fade right cascade>
            <div className='about-layout'>
                <div className="text-about" id='about'>| 
                <p>ABOUT US</p>
                </div>

                <h1>PT Solusi Industri Energi</h1>
                <br/>

                <Fade right delay={600}>
                    <h5>Established on the basis of the growth of the construction and industrial sectors in Indonesia which experienced a surge in value that continues to rise. And the construction sector in Indonesia has grown 7-8 percent.</h5>
                </Fade>
                    <br/>

                <Fade right delay={800}>
                    <h5>Our commitment in every service Engineering procurement and construction is the satisfaction of partners or customers, to realize the commitment We provide quality products and a team of experienced experts and professionals in their fields.</h5>
                </Fade>
                <div className='link-about'>
                    <a href="/about">More Info</a>
                </div>
            </div>
        </Fade>
  </div>
  )
}

export default AboutLayout