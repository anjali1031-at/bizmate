import React from 'react';
import { 
  Utensils, 
  Stethoscope, 
  Hotel, 
  Dumbbell, 
  GraduationCap, 
  Scissors, 
  Car, 
  Wrench,
  ShoppingBag,
  Coffee,
  Camera,
  Palette
} from 'lucide-react';

interface Category {
  id: number;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
  color: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: 'Restaurants', icon: Utensils, count: 1240, color: 'bg-red-100 text-red-600' },
    { id: 2, name: 'Healthcare', icon: Stethoscope, count: 890, color: 'bg-blue-100 text-blue-600' },
    { id: 3, name: 'Hotels', icon: Hotel, count: 567, color: 'bg-purple-100 text-purple-600' },
    { id: 4, name: 'Fitness', icon: Dumbbell, count: 423, color: 'bg-green-100 text-green-600' },
    { id: 5, name: 'Education', icon: GraduationCap, count: 756, color: 'bg-indigo-100 text-indigo-600' },
    { id: 6, name: 'Beauty & Salon', icon: Scissors, count: 634, color: 'bg-pink-100 text-pink-600' },
    { id: 7, name: 'Automotive', icon: Car, count: 389, color: 'bg-gray-100 text-gray-600' },
    { id: 8, name: 'Home Services', icon: Wrench, count: 512, color: 'bg-orange-100 text-orange-600' },
    { id: 9, name: 'Shopping', icon: ShoppingBag, count: 945, color: 'bg-teal-100 text-teal-600' },
    { id: 10, name: 'Cafes', icon: Coffee, count: 678, color: 'bg-amber-100 text-amber-600' },
    { id: 11, name: 'Photography', icon: Camera, count: 234, color: 'bg-cyan-100 text-cyan-600' },
    { id: 12, name: 'Art & Design', icon: Palette, count: 156, color: 'bg-rose-100 text-rose-600' }
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through various business categories to find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-center font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-center text-sm text-gray-500">
                  {category.count.toLocaleString()} businesses
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;