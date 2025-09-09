import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  openStatus: 'Open' | 'Closed';
  description: string;
}

const FeaturedCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const businesses: Business[] = [
    {
      id: 1,
      name: "Bella Vista Restaurant",
      category: "Italian Restaurant",
      rating: 4.8,
      reviews: 142,
      location: "Downtown",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      openStatus: "Open",
      description: "Authentic Italian cuisine with a modern twist"
    },
    {
      id: 2,
      name: "Tech Solutions Hub",
      category: "IT Services",
      rating: 4.9,
      reviews: 89,
      location: "Business District",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      openStatus: "Open",
      description: "Complete technology solutions for your business"
    },
    {
      id: 3,
      name: "Wellness Spa & Salon",
      category: "Beauty & Wellness",
      rating: 4.7,
      reviews: 203,
      location: "Uptown",
      image: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg",
      openStatus: "Closed",
      description: "Luxury spa treatments and professional salon services"
    },
    {
      id: 4,
      name: "City Fitness Center",
      category: "Gym & Fitness",
      rating: 4.6,
      reviews: 156,
      location: "Central",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      openStatus: "Open",
      description: "State-of-the-art equipment and expert trainers"
    },
    {
      id: 5,
      name: "Green Thumb Nursery",
      category: "Garden & Plants",
      rating: 4.8,
      reviews: 67,
      location: "Suburbs",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg",
      openStatus: "Open",
      description: "Premium plants and gardening supplies"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(businesses.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(businesses.length / 3)) % Math.ceil(businesses.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleBusinesses = () => {
    const startIndex = currentSlide * 3;
    return businesses.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top-rated local businesses that our community loves and recommends
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleBusinesses().map((business) => (
              <div
                key={business.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      business.openStatus === 'Open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <Clock className="h-3 w-3 inline mr-1" />
                      {business.openStatus}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{business.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">{business.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-medium text-sm mb-2">{business.category}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{business.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {business.location}
                    </div>
                    <span className="text-xs text-gray-500">{business.reviews} reviews</span>
                  </div>
                  
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:bg-blue-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:bg-blue-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(businesses.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;