import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PartnerLayout from './PartnerLayout';
import ClientLayout from './ClientLayout';
import { Container } from 'react-bootstrap';

function ClientAndPartner() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="Client"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Client" title="Client">
          <ClientLayout />
        </Tab>
        <Tab eventKey="partner" title="Partner">
          <PartnerLayout />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default ClientAndPartner;