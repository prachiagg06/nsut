import React, { useState, useEffect } from 'react';

const LandingPage = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Swasthya saathi';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => onComplete(), 500);
      }
    }, 200);
    
    return () => clearInterval(timer);
  }, [onComplete]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-red-50 flex items-center justify-center">
      <h1 className="text-7xl font-bold text-red-600">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default LandingPage;