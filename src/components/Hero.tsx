import React, { useState } from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const popularSearches = [
    'Restaurants', 'Hospitals', 'Hotels', 'Gyms', 'Schools', 'Salons'
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Local Businesses
            <span className="block text-blue-600">Near You</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the best local services, restaurants, and businesses in your area. 
            Connect with quality providers and explore what your neighborhood has to offer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="md:col-span-4 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
            <span className="text-gray-600 font-medium">Popular Searches</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all transform hover:scale-105 font-medium shadow-sm"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;