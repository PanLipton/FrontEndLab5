import React from 'react';
import logo from '../image/logo.png';

const Header = ({ activeTab, setActiveTab, isDropdownOpen, setIsDropdownOpen }) => {
  const handleServiceClick = (serviceId) => {
    setActiveTab('services');
    setIsDropdownOpen(false);
    
    // Даємо час для рендерингу компонента ServicesPage
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="ФінансПро" className="h-12" />
            <div className="text-2xl font-bold text-orange-500">ФінансПро</div>
          </div>
          <nav className="space-x-6 relative">
            <button 
              onClick={() => setActiveTab('home')}
              className={`${activeTab === 'home' ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-400 transition-colors`}
            >
              Головна
            </button>
            <div className="relative inline-block">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`${activeTab === 'services' ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-400 transition-colors`}
              >
                Напрями діяльності
              </button>
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px]"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleServiceClick('credit')} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Кредитування
                  </button>
                  <button 
                    onClick={() => handleServiceClick('deposits')} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Депозити
                  </button>
                  <button 
                    onClick={() => handleServiceClick('currency')} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Валютні операції
                  </button>
                  <button 
                    onClick={() => handleServiceClick('insurance')} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Страхування
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={() => setActiveTab('feedback')}
              className={`${activeTab === 'feedback' ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-400 transition-colors`}
            >
              Зворотній зв'язок
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;