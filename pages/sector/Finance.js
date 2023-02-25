import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'

const Finance = () => {
  return (
    <div>
      <NavBar />
      <div className='contact-bg'></div>
      <Container className='positions'>
        <div className='job'>
          <h3>Credit Assessment Manager</h3>
          <div className='job-description'>
            <h5>Remote</h5>
          </div>
        </div>

        <div className='job2'>
          <div className='job-location'>
            <h3>Jakarta</h3>
            <h5>Indonesia</h5>
          </div>
          <a href='job-2'>
            <button>View And Apply</button>
          </a>
        </div>
      </Container>

      <Container className='positions'>
        <div className='job'>
          <h3>Assistant Marketing Manager</h3>
          <div className='job-description'>
            <h5>Full Time</h5>
          </div>
        </div>

        <div className='job2'>
          <div className='job-location'>
            <h3>Jakarta</h3>
            <h5>Indonesia</h5>
          </div>
          <a href='job-7'>
            <button>View And Apply</button>
          </a>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Finance