import './containers/Assets/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './containers/Sidebar';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Certificate from './containers/Certificates';

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
