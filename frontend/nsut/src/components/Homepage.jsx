import React from 'react';
import Navbar from './Navbar';

const FeatureCard = ({ title, description, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
      <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Homepage = ({ setCurrentPage }) => {
  const features = [
    {
      title: 'AI-Powered Symptom Checker',
      description: 'Get instant preliminary diagnosis by describing your symptoms. Our AI analyzes your input and provides possible conditions along with recommended actions.',
      icon: '🔍',
      color: 'bg-red-100'
    },
    {
      title: 'Telemedicine Consultations',
      description: 'Connect with certified doctors through video calls. Get prescriptions, medical advice, and follow-up care from the comfort of your home.',
      icon: '👨‍⚕️',
      color: 'bg-sky-100'
    },
    {
      title: 'Medicine Delivery',
      description: 'Order prescribed medicines directly from verified medical stores. Track your order in real-time and get doorstep delivery in rural areas.',
      icon: '💊',
      color: 'bg-red-100'
    },
    {
      title: 'Health Records',
      description: 'Maintain digital health records accessible anytime. Store prescriptions, test reports, and vaccination records securely in one place.',
      icon: '📋',
      color: 'bg-sky-100'
    },
    {
      title: 'Physical Health Tracking',
      description: 'Monitor your fitness journey with exercise plans, nutrition guides, and daily activity tracking designed for rural lifestyles.',
      icon: '💪',
      color: 'bg-red-100'
    },
    {
      title: 'Emergency Services',
      description: 'Quick access to emergency contacts, nearby hospitals, and ambulance services. QR code for instant medical history sharing during emergencies.',
      icon: '🚑',
      color: 'bg-sky-100'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <Navbar currentPage="home" setCurrentPage={setCurrentPage} />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Bringing Quality Healthcare to
            <span className="text-red-600"> Rural India</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Swasthya Saathi bridges the healthcare gap in rural areas by providing accessible, affordable, and quality medical services through technology. Connect with doctors, check symptoms, track health, and access medicines - all from your smartphone.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentPage('symptom-checker')}
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-sky-500 text-sky-600 rounded-lg font-semibold hover:bg-sky-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Features</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed specifically for rural communities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Swasthya saathi</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Swasthya saathi is a revolutionary healthcare platform dedicated to transforming rural healthcare delivery in India. We understand the unique challenges faced by rural communities - limited access to doctors, long travel distances, and lack of awareness about health conditions.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our platform leverages cutting-edge technology including AI-powered diagnostics, telemedicine, and digital health records to bring world-class healthcare to your doorstep. We partner with certified doctors, verified pharmacies, and local health workers to ensure quality care.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With support for multiple regional languages and simple interfaces designed for all age groups, Swasthya saathi makes healthcare accessible to everyone. Join thousands of families who trust Swasthya saathi for their healthcare needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Swasthya saathi</h3>
              <p className="text-gray-300">
                Empowering rural India with accessible healthcare solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-sky-400 transition">Home</button></li>
                <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('symptom-checker')} className="text-gray-300 hover:text-sky-400 transition">Symptom Checker</button></li>
                <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Consult Doctor</a></li>
                <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Medicine Delivery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Health Records</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-300 mb-2">Email: info@Swasthya saathi.com</p>
              <p className="text-gray-300 mb-2">Phone: +91 1800-XXX-XXXX</p>
              <p className="text-gray-300">Address: India</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Swasthya saathi. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;