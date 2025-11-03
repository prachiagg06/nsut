import React, { useState } from 'react';
import { Mic, Heart, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const MentalHealth = ({ setCurrentPage }) => {
  const [textInput, setTextInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [answers, setAnswers] = useState({
    mood: '',
    sleep: '',
    stress: '',
    social: ''
  });
  
  const questions = [
    {
      id: 'mood',
      question: 'How would you describe your mood today?',
      options: ['Very Happy', 'Happy', 'Neutral', 'Sad', 'Very Sad']
    },
    {
      id: 'sleep',
      question: 'How was your sleep quality last night?',
      options: ['Excellent', 'Good', 'Fair', 'Poor', 'Very Poor']
    },
    {
      id: 'stress',
      question: 'What is your stress level today?',
      options: ['No Stress', 'Low', 'Moderate', 'High', 'Very High']
    },
    {
      id: 'social',
      question: 'How connected do you feel with others?',
      options: ['Very Connected', 'Connected', 'Neutral', 'Isolated', 'Very Isolated']
    }
  ];
  
  const recommendations = {
    activities: [
      { title: 'Meditation & Breathing', icon: '🧘', duration: '10-15 minutes', description: 'Practice deep breathing exercises or guided meditation to calm your mind' },
      { title: 'Watch Something Light', icon: '🎬', duration: '30-60 minutes', description: 'Watch a comedy movie or your favorite show to lift your spirits' },
      { title: 'Go for a Walk', icon: '🚶', duration: '20-30 minutes', description: 'Take a walk in nature or around your neighborhood for fresh air' },
      { title: 'Listen to Music', icon: '🎵', duration: '15-20 minutes', description: 'Listen to uplifting or calming music that you enjoy' },
      { title: 'Talk to Someone', icon: '💬', duration: 'As needed', description: 'Reach out to a friend, family member, or counselor to share your feelings' },
      { title: 'Practice Gratitude', icon: '📝', duration: '10 minutes', description: 'Write down 3 things you are grateful for today' }
    ],
    professionalHelp: false,
    overallScore: 72,
    category: 'Moderate Stress'
  };
  
  const moodTrendData = [
    { day: 'Mon', score: 65 },
    { day: 'Tue', score: 70 },
    { day: 'Wed', score: 60 },
    { day: 'Thu', score: 75 },
    { day: 'Fri', score: 72 },
    { day: 'Sat', score: 78 },
    { day: 'Sun', score: 72 }
  ];
  
  const wellnessCategories = [
    { name: 'Mood', score: 72, color: '#10b981' },
    { name: 'Sleep', score: 65, color: '#3b82f6' },
    { name: 'Stress', score: 58, color: '#ef4444' },
    { name: 'Social', score: 70, color: '#f59e0b' }
  ];
  
  const activityCompletion = [
    { activity: 'Meditation', completed: 18, total: 30 },
    { activity: 'Exercise', completed: 22, total: 30 },
    { activity: 'Journaling', completed: 15, total: 30 },
    { activity: 'Social Time', completed: 20, total: 30 }
  ];
  
  const handleVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setTextInput('I have been feeling a bit overwhelmed lately with work and personal responsibilities');
      setIsListening(false);
    }, 2000);
  };
  
  const handleAnalyze = () => {
    if (textInput.trim() && Object.values(answers).every(val => val !== '')) {
      setShowResults(true);
    } else {
      alert('Please complete all questions and describe your feelings');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <Navbar currentPage="mental-health" setCurrentPage={setCurrentPage} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Mental Health Support</h1>
        <p className="text-gray-600 mb-8">Share your feelings and get personalized mental wellness recommendations</p>
        
        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">How are you feeling today?</h2>
          
          <div className="flex gap-3 mb-6">
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Describe what you're feeling today and what kind of help you need..."
              rows="4"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none resize-none"
            />
          </div>
          
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleVoiceInput}
              className={`px-6 py-3 ${isListening ? 'bg-red-600' : 'bg-sky-500'} text-white rounded-lg hover:opacity-90 transition flex items-center gap-2`}
            >
              <Mic size={20} />
              {isListening ? 'Listening...' : 'Speak'}
            </button>
          </div>
          
          {/* MCQ Questions */}
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{q.question}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {q.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setAnswers({...answers, [q.id]: option})}
                      className={`px-4 py-3 rounded-lg border-2 transition ${
                        answers[q.id] === option
                          ? 'bg-red-500 text-white border-red-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleAnalyze}
            className="w-full mt-6 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-lg"
          >
            Analyze My Mental Wellness
          </button>
        </div>
        
        {showResults && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Recommendations */}
            <div className="lg:col-span-2 space-y-6">
              {/* Wellness Score */}
              <div className="bg-gradient-to-r from-green-50 to-sky-50 rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Wellness Score</h2>
                    <p className="text-gray-600">Based on your responses</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600">{recommendations.overallScore}</div>
                    <p className="text-sm text-gray-600 mt-1">out of 100</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-sky-500 h-4 rounded-full transition-all"
                      style={{width: `${recommendations.overallScore}%`}}
                    />
                  </div>
                  <p className="text-center mt-2 text-gray-700 font-semibold">{recommendations.category}</p>
                </div>
              </div>
              
              {/* Professional Help Notice */}
              {recommendations.professionalHelp ? (
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚠️</div>
                    <div>
                      <h3 className="text-lg font-bold text-red-800 mb-2">Consider Professional Support</h3>
                      <p className="text-red-700 mb-3">Based on your responses, we recommend speaking with a mental health professional. Your wellbeing is important.</p>
                      <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold">
                        Find a Counselor
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h3 className="text-lg font-bold text-green-800 mb-2">You're Doing Well!</h3>
                      <p className="text-green-700">Your mental wellness is in a good range. Try the activities below to maintain and improve your wellbeing.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Recommended Activities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Heart className="text-red-600" size={28} />
                  Recommended Activities for You
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.activities.map((activity, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-lg hover:shadow-md transition">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{activity.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-1">{activity.title}</h3>
                          <p className="text-sm text-sky-600 font-semibold mb-2">⏱️ {activity.duration}</p>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                          <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition">
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mental Health Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Activity className="text-red-600" size={28} />
                  Your Mental Wellness Dashboard
                </h2>
                
                {/* Mood Trend */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">7-Day Mood Trend</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={moodTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} name="Wellness Score" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Wellness Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Wellness Categories Breakdown</h3>
                  <div className="space-y-4">
                    {wellnessCategories.map((category) => (
                      <div key={category.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-gray-700">{category.name}</span>
                          <span className="font-bold" style={{color: category.color}}>{category.score}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3">
                          <div 
                            className="h-3 rounded-full transition-all"
                            style={{width: `${category.score}%`, backgroundColor: category.color}}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Activity Completion */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Activity Completion</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={activityCompletion}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="activity" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" fill="#10b981" name="Completed" />
                      <Bar dataKey="total" fill="#e5e7eb" name="Total Days" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Right Section - Quick Tips & Resources */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    💡 Quick Tips
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-sky-50 rounded-lg">
                      <p className="text-sm text-gray-700">Practice 5-4-3-2-1 grounding technique when feeling anxious</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-700">Set a regular sleep schedule and stick to it</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-gray-700">Limit screen time before bed for better sleep</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-gray-700">Stay hydrated and eat regular, balanced meals</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🆘 Crisis Support</h3>
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <p className="text-sm text-gray-700 mb-3">If you're in crisis or need immediate help:</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-red-700">📞 National Helpline: 1800-XXX-XXXX</p>
                      <p className="text-sm font-semibold text-red-700">💬 24/7 Crisis Chat</p>
                      <button className="w-full mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold">
                        Get Help Now
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Resources</h3>
                  <div className="space-y-2">
                    <a href="#" className="block p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition">
                      <p className="font-semibold text-sky-700 text-sm">Guided Meditation Library</p>
                    </a>
                    <a href="#" className="block p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition">
                      <p className="font-semibold text-sky-700 text-sm">Mental Health Articles</p>
                    </a>
                    <a href="#" className="block p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition">
                      <p className="font-semibold text-sky-700 text-sm">Relaxation Exercises</p>
                    </a>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Heart className="text-green-600" size={20} />
                      <span className="text-sm font-semibold text-gray-700">Check-ins</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">24</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Activity className="text-sky-600" size={20} />
                      <span className="text-sm font-semibold text-gray-700">Streak Days</span>
                    </div>
                    <span className="text-lg font-bold text-sky-600">7</span>
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

export default MentalHealth;