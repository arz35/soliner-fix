import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Career from './pages/Career'

const App = () => {
  return (
      <div className="app">
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/career" element={<Career/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;