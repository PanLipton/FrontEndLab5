import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import FeedbackForm from './FeedbackForm';
import Footer from './Footer';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <main className="container mx-auto px-4 py-8 mt-16">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'services' && <ServicesPage />}
        {activeTab === 'feedback' && <FeedbackForm />}
      </main>
      <Footer />
    </div>
  );
};

export default App;