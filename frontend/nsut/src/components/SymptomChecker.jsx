
import React, { useState } from 'react';
import { Mic, Search, Calendar, Pill, Activity, Heart, Thermometer, Home, FileText, Stethoscope, Users } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';
const SymptomChecker = ({ currentPage, setCurrentPage }) => {
  const [searchInput, setSearchInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isListening, setIsListening] = useState(false);

  
  const commonSymptoms = [
    'Fever and headache',
    'Cough and cold',
    'Stomach pain',
    'Body ache and fatigue',
    'Sore throat',
    'Nausea and vomiting',
    'Dizziness',
    'Chest pain',
    'Skin rash',
    'Back pain'
  ];
  
  const shops = [
    { name: 'Apollo Pharmacy', distance: '0.5 km', phone: '+91-9876543210' },
    { name: 'MedPlus', distance: '1.2 km', phone: '+91-9876543211' },
    { name: 'Wellness Forever', distance: '2.0 km', phone: '+91-9876543212' }
  ];

  const diagnosisData = {
    condition: 'Common Cold / Viral Fever',
    severity: 'Mild',
    doctorRequired: false,
    medicines: [
      { name: 'Paracetamol 500mg', dosage: 'Take 1 tablet every 6-8 hours after meals', duration: '3-5 days', availableAt: ['Apollo Pharmacy', 'MedPlus', 'Wellness Forever'] },
      { name: 'Cetirizine 10mg', dosage: 'Take 1 tablet once daily before bedtime', duration: '5 days', availableAt: ['Apollo Pharmacy', 'MedPlus'] },
      { name: 'Vitamin C tablets', dosage: 'Take 1 tablet daily after breakfast', duration: '7 days', availableAt: ['MedPlus', 'Wellness Forever'] }
    ],
    homeCare: [
      'Drink plenty of warm water and fluids',
      'Take adequate rest for 7-8 hours',
      'Gargle with warm salt water 2-3 times daily',
      'Avoid cold foods and beverages',
      'Steam inhalation twice daily'
    ],
    warning: 'If symptoms persist beyond 5 days or worsen, please consult a doctor immediately.'
  };
  
  const symptomFrequency = [
    { month: 'Jun', count: 2 },
    { month: 'Jul', count: 1 },
    { month: 'Aug', count: 3 },
    { month: 'Sep', count: 1 },
    { month: 'Oct', count: 2 },
    { month: 'Nov', count: 4 }
  ];
  
  const symptomCategories = [
    { name: 'Respiratory', value: 35, color: '#ef4444' },
    { name: 'Digestive', value: 25, color: '#3b82f6' },
    { name: 'Muscular', value: 20, color: '#10b981' },
    { name: 'Others', value: 20, color: '#f59e0b' }
  ];
  
  const severityData = [
    { severity: 'Mild', count: 8 },
    { severity: 'Moderate', count: 4 },
    { severity: 'Severe', count: 1 }
  ];
  
  const handleSearch = () => {
    if (searchInput.trim()) {
      setShowResults(true);
    }
  };
  
  const handleVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setSearchInput('Fever and headache');
      setIsListening(false);
    }, 2000);
  };

  const handleBookAppointment = () => {
    alert('Redirecting to Book Appointment page...');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Navbar */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="text-red-600" size={32} />
              <span className="text-2xl font-bold text-gray-800">HealthCare+</span>
            </div>
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
                <Home size={20} />
                <span>Home</span>
              </button>
              <button className="flex items-center gap-2 text-red-600 font-semibold">
                <Stethoscope size={20} />
                <span>Symptom Checker</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
                <Calendar size={20} />
                <span>Appointments</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
                <FileText size={20} />
                <span>Records</span>
              </button>
            </div>
          </div>
        </div>
      </nav> */}
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Symptom Checker</h1>
        <p className="text-gray-600 mb-8">Describe your symptoms and get instant preliminary diagnosis</p>
        
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Type or speak your symptoms..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
              <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
            </div>
            <button
              onClick={handleVoiceInput}
              className={`px-6 py-3 ${isListening ? 'bg-red-600' : 'bg-sky-500'} text-white rounded-lg hover:opacity-90 transition flex items-center gap-2`}
            >
              <Mic size={20} />
              {isListening ? 'Listening...' : 'Speak'}
            </button>
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Analyze
            </button>
          </div>
          
          {/* Common Symptoms */}
          <div>
            <p className="text-sm text-gray-600 mb-3">Common symptoms:</p>
            <div className="flex flex-wrap gap-2">
              {commonSymptoms.map((symptom, index) => (
                <button
                  key={index}
                  onClick={() => setSearchInput(symptom)}
                  className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm hover:bg-sky-100 transition"
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {showResults && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Diagnosis Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Diagnosis Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{diagnosisData.condition}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      diagnosisData.severity === 'Mild' ? 'bg-green-100 text-green-700' : 
                      diagnosisData.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {diagnosisData.severity} Severity
                    </span>
                  </div>
                  <div className={`px-4 py-2 rounded-lg ${diagnosisData.doctorRequired ? 'bg-red-100' : 'bg-green-100'}`}>
                    <Calendar className={diagnosisData.doctorRequired ? 'text-red-600' : 'text-green-600'} size={24} />
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg mb-6 ${diagnosisData.doctorRequired ? 'bg-red-50 border-l-4 border-red-500' : 'bg-green-50 border-l-4 border-green-500'}`}>
                  <p className={`font-semibold ${diagnosisData.doctorRequired ? 'text-red-800' : 'text-green-800'}`}>
                    {diagnosisData.doctorRequired ? '⚠️ Doctor Appointment Recommended' : '✓ Self-care is sufficient. No doctor visit needed immediately.'}
                  </p>
                </div>

                <button 
                  onClick={handleBookAppointment}
                  className="w-full mb-6 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Calendar size={24} />
                  Book Doctor Appointment
                </button>
                
                {/* Medicines */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Pill className="text-red-600" size={24} />
                    Recommended Medicines
                  </h3>
                  <div className="space-y-4">
                    {diagnosisData.medicines.map((med, index) => (
                      <div key={index} className="p-4 bg-sky-50 rounded-lg border-l-4 border-sky-500">
                        <p className="font-semibold text-gray-800 mb-1">{med.name}</p>
                        <p className="text-sm text-gray-600 mb-1">📋 {med.dosage}</p>
                        <p className="text-sm text-gray-600 mb-2">⏱️ Duration: {med.duration}</p>
                        <div className="mt-3 pt-3 border-t border-sky-200">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Available at:</p>
                          <div className="flex flex-wrap gap-2">
                            {med.availableAt.map((shop, shopIndex) => (
                              <span key={shopIndex} className="px-3 py-1 bg-white text-sky-700 rounded-full text-xs font-medium border border-sky-300">
                                📍 {shop}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Home Care */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Home Care Tips</h3>
                  <ul className="space-y-2">
                    {diagnosisData.homeCare.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Warning */}
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                  <p className="text-yellow-800">⚠️ {diagnosisData.warning}</p>
                </div>
              </div>

              {/* Health Analytics Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Activity className="text-red-600" size={28} />
                  Your Health Analytics
                </h2>
                
                {/* Symptom Frequency Chart */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Symptom Frequency (Last 6 Months)</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={symptomFrequency}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="count" stroke="#ef4444" strokeWidth={3} name="Symptoms Reported" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Category and Severity Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Symptom Categories */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Symptom Categories</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={symptomCategories}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry) => `${entry.name}: ${entry.value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {symptomCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Severity Distribution */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Severity Distribution</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={severityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="severity" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#3b82f6" name="Cases" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Shops & Pill Identification */}
            <div className="lg:col-span-1">
              {/* Nearby Pharmacies */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Pill className="text-green-600" size={24} />
                  Nearby Pharmacies
                </h3>
                <div className="space-y-3">
                  {shops.map((shop, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <p className="font-semibold text-gray-800 mb-1">{shop.name}</p>
                      <p className="text-sm text-gray-600 mb-1">📍 {shop.distance} away</p>
                      <p className="text-sm text-gray-600">📞 {shop.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pill Identification */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Pill className="text-sky-600" size={24} />
                  Pill Identification
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Upload a photo of your pill to identify it and get detailed information
                </p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4 hover:border-sky-500 transition cursor-pointer">
                  <div className="mb-4">
                    <Pill className="mx-auto text-gray-400" size={48} />
                  </div>
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                </div>
                
                <button className="w-full px-4 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition font-semibold">
                  Identify Pill
                </button>
                
                <div className="mt-6 p-4 bg-sky-50 rounded-lg">
                  <p className="text-sm text-sky-800">
                    <strong>Coming Soon:</strong> AI-powered pill identification will help you identify unknown medications instantly
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Heart className="text-red-600" size={20} />
                      <span className="text-sm font-semibold text-gray-700">Total Checkups</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">13</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Thermometer className="text-green-600" size={20} />
                      <span className="text-sm font-semibold text-gray-700">Avg. Severity</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">Mild</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;