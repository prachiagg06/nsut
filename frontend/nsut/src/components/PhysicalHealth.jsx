import React, { useState } from 'react';
import { Bluetooth, BluetoothOff, Battery, Footprints, Flame, MapPin, Activity, Heart } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const PhysicalHealth = ({ setCurrentPage }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(65);
  const [signalStrength, setSignalStrength] = useState(4); // 0-4 bars
  
  // Health metrics
  const healthMetrics = {
    spo2: 98,
    steps: 8453,
    calories: 387,
    distance: 6.2 // in km
  };
  
  // Heart rate data - last 15 readings
  const heartRateData = [
    { reading: 1, bpm: 72 },
    { reading: 2, bpm: 75 },
    { reading: 3, bpm: 78 },
    { reading: 4, bpm: 82 },
    { reading: 5, bpm: 88 },
    { reading: 6, bpm: 95 },
    { reading: 7, bpm: 92 },
    { reading: 8, bpm: 85 },
    { reading: 9, bpm: 80 },
    { reading: 10, bpm: 76 },
    { reading: 11, bpm: 74 },
    { reading: 12, bpm: 73 },
    { reading: 13, bpm: 75 },
    { reading: 14, bpm: 77 },
    { reading: 15, bpm: 76 }
  ];
  
  // Daily distance traveled - pie chart
  const distanceData = [
    { day: 'Monday', distance: 5.2, color: '#ef4444' },
    { day: 'Tuesday', distance: 6.8, color: '#3b82f6' },
    { day: 'Wednesday', distance: 4.5, color: '#10b981' },
    { day: 'Thursday', distance: 7.3, color: '#f59e0b' },
    { day: 'Friday', distance: 6.2, color: '#8b5cf6' },
    { day: 'Saturday', distance: 8.1, color: '#ec4899' },
    { day: 'Sunday', distance: 5.9, color: '#06b6d4' }
  ];
  
  const totalWeekDistance = distanceData.reduce((sum, day) => sum + day.distance, 0);
  
  const handleConnect = () => {
    setIsConnected(!isConnected);
  };
  
  const getSignalBars = () => {
    return Array.from({ length: 4 }, (_, index) => (
      <div
        key={index}
        className={`w-1 rounded-sm ${
          index < signalStrength ? 'bg-green-500' : 'bg-gray-300'
        }`}
        style={{ height: `${(index + 1) * 5}px` }}
      />
    ));
  };
  
  const getBatteryColor = () => {
    if (batteryLevel > 50) return 'text-green-500';
    if (batteryLevel > 20) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <Navbar currentPage="physical-health" setCurrentPage={setCurrentPage} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Physical Health Tracker</h1>
        <p className="text-gray-600 mb-8">Monitor your fitness band data and track your daily activities</p>
        
        {/* Device Status Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            {/* Connection Status */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleConnect}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg transition ${
                  isConnected
                    ? 'bg-green-50 border-2 border-green-500'
                    : 'bg-red-50 border-2 border-red-500'
                }`}
              >
                {isConnected ? (
                  <Bluetooth className="text-green-600" size={24} />
                ) : (
                  <BluetoothOff className="text-red-600" size={24} />
                )}
                <div className="text-left">
                  <p className="text-sm text-gray-600">Device Status</p>
                  <p className={`font-bold ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                    {isConnected ? 'Connected' : 'Not Connected'}
                  </p>
                </div>
              </button>
              
              {/* Signal Strength */}
              {isConnected && (
                <div className="flex items-center gap-3 px-6 py-3 bg-sky-50 rounded-lg border-2 border-sky-200">
                  <div className="flex items-end gap-0.5 h-6">
                    {getSignalBars()}
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Signal</p>
                    <p className="font-bold text-sky-600">{signalStrength}/4</p>
                  </div>
                </div>
              )}
              
              {/* Battery Level */}
              {isConnected && (
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg border-2 border-gray-200">
                  <Battery className={`${getBatteryColor()}`} size={24} />
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Battery</p>
                    <p className={`font-bold ${getBatteryColor()}`}>{batteryLevel}%</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sync Button */}
            {isConnected && (
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold flex items-center gap-2">
                <Activity size={20} />
                Sync Data
              </button>
            )}
          </div>
        </div>
        
        {isConnected ? (
          <>
            {/* Health Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* SpO2 */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-6 border-2 border-red-100 hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <span className="text-3xl font-bold text-red-600">{healthMetrics.spo2}%</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">SpO2 Level</h3>
                <p className="text-sm text-gray-600 mt-1">Oxygen Saturation</p>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{width: `${healthMetrics.spo2}%`}}
                  />
                </div>
              </div>
              
              {/* Steps */}
              <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl shadow-lg p-6 border-2 border-sky-100 hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Footprints className="text-sky-600" size={24} />
                  </div>
                  <span className="text-3xl font-bold text-sky-600">{healthMetrics.steps.toLocaleString()}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Steps</h3>
                <p className="text-sm text-gray-600 mt-1">Today's Count</p>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-sky-500 h-2 rounded-full transition-all"
                    style={{width: `${(healthMetrics.steps / 10000) * 100}%`}}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Goal: 10,000 steps</p>
              </div>
              
              {/* Calories */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-6 border-2 border-orange-100 hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Flame className="text-orange-600" size={24} />
                  </div>
                  <span className="text-3xl font-bold text-orange-600">{healthMetrics.calories}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Calories Burned</h3>
                <p className="text-sm text-gray-600 mt-1">Today's Total</p>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{width: `${(healthMetrics.calories / 500) * 100}%`}}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Goal: 500 kcal</p>
              </div>
              
              {/* Distance */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-6 border-2 border-green-100 hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <span className="text-3xl font-bold text-green-600">{healthMetrics.distance}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Distance</h3>
                <p className="text-sm text-gray-600 mt-1">Kilometers Today</p>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{width: `${(healthMetrics.distance / 10) * 100}%`}}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Goal: 10 km</p>
              </div>
            </div>
            
            {/* Dashboard Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Heart Rate Bar Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Heart className="text-red-600" size={28} />
                  Heart Rate Readings
                </h2>
                <p className="text-gray-600 mb-6 text-sm">Last 15 measurements</p>
                
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="reading" 
                      label={{ value: 'Reading Number', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      domain={[60, 100]}
                      label={{ value: 'BPM', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value} BPM`, 'Heart Rate']}
                      labelFormatter={(label) => `Reading ${label}`}
                    />
                    <Legend />
                    <Bar 
                      dataKey="bpm" 
                      fill="#ef4444" 
                      name="Heart Rate (BPM)"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
                
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Average Heart Rate</p>
                      <p className="text-2xl font-bold text-red-600">
                        {Math.round(heartRateData.reduce((sum, r) => sum + r.bpm, 0) / heartRateData.length)} BPM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="text-lg font-bold text-green-600">Normal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Daily Distance Pie Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <MapPin className="text-green-600" size={28} />
                  Daily Distance Traveled
                </h2>
                <p className="text-gray-600 mb-6 text-sm">This week's breakdown</p>
                
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={distanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={(entry) => `${entry.day}: ${entry.distance} km`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="distance"
                    >
                      {distanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} km`} />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total This Week</p>
                      <p className="text-2xl font-bold text-green-600">{totalWeekDistance.toFixed(1)} km</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Daily Average</p>
                      <p className="text-lg font-bold text-sky-600">{(totalWeekDistance / 7).toFixed(1)} km</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Active Minutes</h3>
                <p className="text-3xl font-bold text-red-600">42 min</p>
                <p className="text-sm text-gray-600 mt-1">Today's activity time</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sky-500">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sleep Duration</h3>
                <p className="text-3xl font-bold text-sky-600">7.5 hrs</p>
                <p className="text-sm text-gray-600 mt-1">Last night's sleep</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Weekly Goal</h3>
                <p className="text-3xl font-bold text-green-600">78%</p>
                <p className="text-sm text-gray-600 mt-1">Progress this week</p>
              </div>
            </div>
          </>
        ) : (
          // Not Connected State
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <BluetoothOff className="mx-auto text-gray-400 mb-6" size={80} />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Device Connected</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Please connect your fitness band via Bluetooth to view your health metrics and track your daily activities.
            </p>
            <button
              onClick={handleConnect}
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold flex items-center gap-2 mx-auto"
            >
              <Bluetooth size={20} />
              Connect Device
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhysicalHealth;