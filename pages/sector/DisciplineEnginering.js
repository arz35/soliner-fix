import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'

const DisciplineEnginering = () => {
  return (
    <div>
      <NavBar />
      <div className='contact-bg'></div>
        <Container className='positions'>
          <div className='job'>
            <h3>Legal Counsel - Patent</h3>
            <div className='job-description'>
              <h5>Part Time</h5>
            </div>
          </div>

          <div className='job2'>
            <div className='job-location'>
              <h3>Jakarta</h3>
              <h5>Indonesia</h5>
            </div>
            <a href='job-3'>
              <button>View And Apply</button>
            </a>
          </div>
        </Container>

        <Container className='positions'>
            <div className='job'>
              <h3>Quality Assurance Specialist</h3>
              <div className='job-description'>
                <h5>Remote</h5>
              </div>
            </div>

            <div className='job2'>
              <div className='job-location'>
                <h3>Jakarta</h3>
                <h5>Indonesia</h5>
              </div>
              <a href='job-6'>
                <button>View And Apply</button>
              </a>
            </div>
        </Container>
      <Footer />
    </div>
  )
}

export default DisciplineEnginering