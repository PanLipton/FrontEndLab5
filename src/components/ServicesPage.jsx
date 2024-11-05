import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { services } from '../services/servicesData';
import ServicesCarousel from './ServicesCarousel';
import ServiceCard from './ServiceCard';

const ServicesPage = () => {
  const [searchText, setSearchText] = useState('');

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <ServicesCarousel services={services} />

      <div className="flex items-center space-x-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Пошук напряму діяльності..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;