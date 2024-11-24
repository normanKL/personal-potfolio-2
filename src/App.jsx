import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from './components/Home';
import AboutNorman from './components/AboutNorman';
import OrgLearning from './components/OrgLearning';
import ELearnDev from './components/eLearnDev';
import SEJourney from './components/SEJourney';
import ELearnProjects from './components/eLearnProjects';
import SEProjects from './components/SEProjects';
import SEProjectsList from './components/SEProjectsList';
import Experiences from './components/Experiences';
import Location from './components/Location';
import PageNotFound from './components/PageNotFound';
import cat from '/assets/cat.jpg'

function App() {

  useEffect(() => {
    const handleOrientationChange = () => {
      const rotateMessage = document.querySelector('.rotate-message');
      if (window.innerWidth <= 1200 && window.innerHeight > window.innerWidth) {
        rotateMessage.style.display = 'block';
      } else {
        rotateMessage.style.display = 'none';
      }
    };

    handleOrientationChange();

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <>
      <div className="rotate-message">
        <p style={{ fontSize: '100%' }}><i className="fas fa-sync-alt"></i> Please rotate your device to landscape mode.</p>
        <br />
        <img src={cat} alt="rotate" style={{ height: 'auto', width: '100%', border: '3px solid grey', borderRadius: '10px' }} />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-norman" element={<AboutNorman />} />
          <Route path="/org-learning" element={<OrgLearning />} />
          <Route path="/elearn-dev" element={<ELearnDev />} />
          <Route path="/se-journey" element={<SEJourney />} />
          <Route path="/elearn-projects" element={<ELearnProjects />} />
          <Route path="/se-projects/:id" element={<SEProjects />} />
          <Route path="/se-projects" element={<SEProjectsList />} />
          <Route path="/career-journey" element={<Experiences />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
