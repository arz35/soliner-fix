import React from 'react'
import AboutLayout from '../components/AboutLayout'
import LandingPage from '../components/LandingPage'
import { NavBar } from '../components/NavBar'
import ServicesLayout from '../components/ServicesLayout'
import Tabs from '../components/ClientAndPartner'
import { Footer } from '../components/Footer'
import ScrollUp from '../components/ScrollUp'

const Home = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <AboutLayout />
      <ServicesLayout />
      <Tabs />
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default Home