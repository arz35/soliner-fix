import React from 'react'
import { Tabs, Tab, Container} from 'react-bootstrap';
import CivilWorks from './CivilWorks'
import HeavyLifting from './HeavyLifting'
import MechanicalInstallation from './MechanicalInstallation'
import PipingFabrication from './PipingFabrication'
import Procurement from './Procurement'
import SpecialServices from './SpecialServices'
import { Fade } from 'react-reveal';
import ScaffoldingInstallation from './ScaffoldingInstallation';
import ManPower from './ManPower';
import ElectricalAndInstrument from './ElectricalAndInstrument';
import InsulationProvision from './InsulationProvision';

const ServicesTabs = () => {
  return (
    <Container className='services-tabs'>
      <Tabs
        defaultActiveKey="piping"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="piping" title="Piping Fabrication">
          <PipingFabrication />
        </Tab>
        <Tab eventKey="mechanical" title="Mechanical Installations">
          <MechanicalInstallation />
        </Tab>
        <Tab eventKey="heavy-lifting" title="Heavy Lifitng">
          <HeavyLifting />
        </Tab>
        <Tab eventKey="civil" title="Civil Works">
          <CivilWorks />
        </Tab>
        <Tab eventKey="scaffolding" title="Scaffolding Installation">
          <ScaffoldingInstallation />
        </Tab>
        <Tab eventKey="manpower" title="Manpower Supply">
          <ManPower />
        </Tab>
        <Tab eventKey="electrical" title="Electrical And Instrument">
          <ElectricalAndInstrument />
        </Tab>
        <Tab eventKey="Insulation" title="Insulation Provision">
          <InsulationProvision />
        </Tab>
        <Tab eventKey="procurement" title="Procurement Services">
          <Procurement />
        </Tab>
        <Tab eventKey="special" title="Special Services">
          <SpecialServices />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default ServicesTabs