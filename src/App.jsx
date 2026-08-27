import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/landing page/LandingPage';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import './App.css';

// ScrollToTop helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
