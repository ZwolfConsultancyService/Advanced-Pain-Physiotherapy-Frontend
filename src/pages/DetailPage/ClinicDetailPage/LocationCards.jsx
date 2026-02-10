import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function LocationCards() {
  const navigate = useNavigate();
  
  const locations = [
    { name: 'Kalkaji', slug: 'kalkaji' },
    { name: 'Nehru Place', slug: 'nehru-place' },
    { name: 'Greater Kailash', slug: 'greater-kailash' },
    { name: 'Lajpat Nagar', slug: 'lajpat-nagar' }
  ];

  const handleLocationClick = (slug) => {
    navigate(`/location/${slug}`);
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">
          We Serve South Delhi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(location.slug)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
            >
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-600" />
                <h3 className="text-lg font-medium text-gray-800 text-center">
                  {location.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}