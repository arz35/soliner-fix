import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import ServicesTabs from '../components/ServicesTabs'

const Services = () => {
  return (
    <div>
      <NavBar />
      <div className='services-bg'>
      </div>
      <h1 className='text-services1'>Our Services</h1>
      <ServicesTabs />
      <Footer />
    </div>
  )
}

export default Services