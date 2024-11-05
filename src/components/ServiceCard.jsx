import React from 'react';

const ServiceCard = ({ id, title, description, stateConnection, image }) => {
  return (
    <div id={id} className="bg-white rounded-lg overflow-hidden border-2 border-orange-600 border-r-[3px] border-l-double border-t-double border-b-double hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-all duration-300 hover:saturate-[2]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 italic font-light">{stateConnection}</p>
      </div>
    </div>
  );
};

export default ServiceCard;