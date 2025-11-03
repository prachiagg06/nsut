import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  
  const languages = ['English', 'Hindi', 'Punjabi', 'Marathi', 'Bengali', 'Tamil', 'Telugu', 'Gujarati'];
  
  // Updated login options with their corresponding routes
 const loginOptions = [
  { label: 'User', route: 'login-signup' },
  { label: 'Doctor', route: 'login-signup' },
  { label: 'Medical Store', route: 'login-signup' },
  { label: 'QR Code', route: 'medical-qr' }
];

  
  const handleLoginOptionClick = (route) => {
    setCurrentPage(route);
    setShowLoginDropdown(false);
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-sky-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-red-600">Swasthya saathi</span>
          </div>
          
          {/* Right side - Language and Links */}
          <div className="flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-sky-50 transition"
              >
                <span className="text-gray-700">{selectedLanguage}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {showLangDropdown && (
                <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setShowLangDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-sky-50 transition"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Navigation Links */}
            <button 
              onClick={() => setCurrentPage('symptom-checker')}
              className={`${currentPage === 'symptom-checker' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 transition font-medium`}
            >
              Symptom Checker
            </button>
            <button 
              onClick={() => setCurrentPage('mental-health')}
              className={`${currentPage === 'mental-health' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 transition font-medium`}
            >
              Mental Health
            </button>
            <button 
              onClick={() => setCurrentPage('physical-health')}
              className={`${currentPage === 'physical-health' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 transition font-medium`}
            >
              Physical Health
            </button>
            
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                <span>Login</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showLoginDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {loginOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleLoginOptionClick(option.route)}
                      className="block w-full text-left px-4 py-3 hover:bg-sky-50 transition border-b border-gray-100 last:border-b-0"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;