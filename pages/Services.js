import React from 'react'
import CivilWorks from '../components/CivilWorks'
import ElectricalAndInstrument from '../components/ElectricalAndInstrument'
import { Footer } from '../components/Footer'
import HeavyLifting from '../components/HeavyLifting'
import InsulationProvision from '../components/InsulationProvision'
import ManPower from '../components/ManPower'
import MechanicalInstallation from '../components/MechanicalInstallation'
import { NavBar } from '../components/NavBar'
import PipingFabrication from '../components/PipingFabrication'
import Procurement from '../components/Procurement'
import ScaffoldingInstallation from '../components/ScaffoldingInstallation'
import ScrollUp from '../components/ScrollUp'
import ServicesTabs from '../components/ServicesTabs'
import SpecialServices from '../components/SpecialServices'
import SteelStructure from '../components/SteelStructure'

const Services = () => {
  return (
    <div>
      <NavBar />
      <div className='contact-bg'>
      </div>
      <h1 className='text-services1'>Our Services</h1>
      <PipingFabrication />
      <MechanicalInstallation />
      <SteelStructure />
      <ElectricalAndInstrument />
      <CivilWorks />
      <HeavyLifting />
      <ScaffoldingInstallation />
      <ManPower />
      <InsulationProvision />
      <SpecialServices />
      <Procurement />
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default Services