import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Career from './pages/Career'
import Contracting from './pages/sector/Contracting';
import DisciplineEnginering from './pages/sector/DisciplineEnginering';
import Finance from './pages/sector/Finance';
import InformationTechnology from './pages/sector/InformationTechnology';
import Marketing from './pages/sector/Marketing';
import ProductionEngineering from './pages/sector/ProductionEngineering';
import AssistantMarketing from './pages/jobDesk/AssistantMarketing';
import AssociateAdmin from './pages/jobDesk/AssociateAdmin';
import ConstructionOEM from './pages/jobDesk/ConstructionOEM';
import CreditAssesment from './pages/jobDesk/CreditAssesment';
import LegalCounsel from './pages/jobDesk/LegalCounsel';
import ProccesEngineer from './pages/jobDesk/ProccesEngineer';
import QualityAssurance from './pages/jobDesk/QualityAssurance';
import Project from './pages/Project';

const App = () => {
  return (
      <div className="app">
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/career" element={<Career/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/sector-1" element={<Contracting />}/>
            <Route path="/sector-2" element={<DisciplineEnginering />}/>
            <Route path="/sector-3" element={<Finance />}/>
            <Route path="/sector-4" element={<InformationTechnology />}/>
            <Route path="/sector-5" element={<Marketing />}/>
            <Route path="/sector-6" element={<ProductionEngineering />}/>
            <Route path="/job-1" element={<AssociateAdmin />}/>
            <Route path="/job-2" element={<CreditAssesment />}/>
            <Route path="/job-3" element={<LegalCounsel />}/>
            <Route path="/job-4" element={<ProccesEngineer />}/>
            <Route path="/job-5" element={<ConstructionOEM />}/>
            <Route path="/job-6" element={<QualityAssurance />}/>
            <Route path="/job-7" element={<AssistantMarketing />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;