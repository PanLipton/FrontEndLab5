import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

const FeedbackForm = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const { formData, errors, handleChange, validateForm } = useForm({
    fullName: '',
    email: '',
    age: '',
    education: '',
    purpose: '',
    details: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Зворотній зв'язок</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Прізвище та ім'я</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Вік</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Освіта</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.education ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
          >
            <option value="">Оберіть освіту</option>
            <option value="full">Повна</option>
            <option value="incomplete">Неповна</option>
            <option value="higher">Вища</option>
            <option value="professional">Професійна</option>
          </select>
          {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Мета зворотнього зв'язку</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.purpose ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
          >
            <option value="">Оберіть мету</option>
            <option value="cooperation">Співпраця</option>
            <option value="complaint">Скарга на порушення права власності</option>
            <option value="proposal">Пропозиція</option>
            <option value="error">Наявність помилки</option>
          </select>
          {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
        </div>

        <div className="relative">
          <label className="block text-gray-700 mb-2">Детально</label>
          <div className="relative">
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="w-full p-2 border border-gray-300 rounded h-32 
                       hover:bg-gray-50 hover:shadow-lg transition-all
                       focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              maxLength={500}
            />
            {showTooltip && (
              <div className="absolute top-0 right-0 transform translate-x-full -translate-y-1/2 
                            bg-gray-800 text-white p-2 rounded text-sm max-w-xs z-10">
                Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">
            Я даю згоду на обробку моєї особистої інформації
          </label>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 
                   transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Відправити
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

