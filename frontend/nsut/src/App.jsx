import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import SymptomChecker from './components/SymptomChecker';
import MentalHealth from './components/MentalHealth';
import PhysicalHealth from './components/PhysicalHealth';
import LoginSignup from './components/Loginsignup';
import QRcode from './components/QRcode';

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage setCurrentPage={setCurrentPage} />;

      case 'symptom-checker':
        return <SymptomChecker setCurrentPage={setCurrentPage} />;

      case 'mental-health':
        return <MentalHealth setCurrentPage={setCurrentPage} />;

      case 'physical-health':
        return <PhysicalHealth setCurrentPage={setCurrentPage} />;

      case 'login-signup':
        return <LoginSignup setCurrentPage={setCurrentPage} />;

      case 'medical-qr':
        return <QRcode setCurrentPage={setCurrentPage} />;

      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {showLanding ? (
        <LandingPage onComplete={() => setShowLanding(false)} />
      ) : (
        renderPage()
      )}
    </div>
  );
};

export default App;
