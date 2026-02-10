import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function LocationCards() {
  const navigate = useNavigate();
  
  const locations = [
    { name: 'Faridabad', slug: 'faridabad' },
    { name: 'Badarpur', slug: 'badarpur' }
  ];

  const handleLocationClick = (slug) => {
    navigate(`/location/${slug}`);
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-6 justify-center flex-wrap">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(location.slug)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 min-w-[200px] cursor-pointer hover:scale-105"
            >
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl text-gray-800">{location.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}