import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import '../src/i18n.js';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import AroundWorld from './pages/AroundWorld';
import Blog from './pages/Blog';
import ServiceDetails from './components/ServiceDetail.js';
import NavBar from './components/Navbar/NavBar'; // <-- Import NavBar

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useEffect(() => {
    const isDirectNavigation = window.performance
      ?.getEntriesByType('navigation')
      ?.map(nav => nav.type)
      ?.includes('navigate');
      
    const currentPath = window.location.pathname;
    const validPaths = ['/', '/contact', '/get-demo', '/services', '/AroundWorld', '/blog'];
    const isServicePath = currentPath.startsWith('/service/');
    
    if (isDirectNavigation && !validPaths.includes(currentPath) && !isServicePath) {
      window.location.href = 'https://2kevents.ae';
    }
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop>
          <NavBar /> {/* <-- Add NavBar here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Story" element={<DemoProduct />} />
            <Route path='/AroundWorld' element={<AroundWorld />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;