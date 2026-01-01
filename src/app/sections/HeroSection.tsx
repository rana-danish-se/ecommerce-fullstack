"use client"
import { useState } from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const categories = [
    {
      name: 'Automobiles',
      title: 'Latest trending',
      subtitle: 'Electronic items',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'
    },
    {
      name: 'Clothes and wear',
      title: 'Fashion collection',
      subtitle: 'Trendy outfits',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80'
    },
    {
      name: 'Home interiors',
      title: 'Modern living',
      subtitle: 'Home decor ideas',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
    },
    {
      name: 'Computer and tech',
      title: 'Latest technology',
      subtitle: 'Tech innovations',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    },
    {
      name: 'Tools, equipments',
      title: 'Professional tools',
      subtitle: 'Quality equipment',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80'
    },
    {
      name: 'Sports and outdoor',
      title: 'Active lifestyle',
      subtitle: 'Sports gear',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80'
    },
    {
      name: 'Animal and pets',
      title: 'Pet essentials',
      subtitle: 'Care products',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80'
    },
    {
      name: 'Machinery tools',
      title: 'Heavy equipment',
      subtitle: 'Industrial tools',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 md:p-6 max-w-7xl mx-auto">
      {/* Left Sidebar - Categories (Hidden on mobile) */}
      <aside className="hidden lg:block w-64 bg-white rounded-lg shadow-sm p-4">
        <nav>
          <ul className="space-y-1">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    selectedCategory.name === category.name
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/products"
                className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                More category
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Center - Hero Banner */}
      <main className="flex-1 relative rounded-lg overflow-hidden shadow-lg min-h-[400px] lg:min-h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${selectedCategory.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/90 to-teal-300/70" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2">
            {selectedCategory.title}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {selectedCategory.subtitle}
          </h1>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium text-base shadow-md hover:shadow-lg transition-shadow w-fit cursor-pointer">
            Learn more
          </button>
        </div>
      </main>

      {/* Right Sidebar - User Actions & Offers */}
      <aside className="w-full lg:w-65 space-y-4">
        {/* User Card */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-800 font-medium">Hi, user</p>
              <p className="text-gray-600 text-sm">Let's get started</p>
            </div>
          </div>
          <Link
            href="/register"
            className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3 text-center cursor-pointer"
          >
            Join now
          </Link>
          <Link
            href="/signup"
            className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 text-center cursor-pointer"
          >
            Log in
          </Link>
        </div>

        {/* Offer Card 1 */}
        <div className="bg-orange-500 rounded-lg p-4 shadow-sm text-white">
          <p className="text-xl  font-light leading-relaxed">
            Get US $10 off<br />
            with a new<br />
            supplier
          </p>
        </div>

        {/* Offer Card 2 */}
        <div className="bg-teal-400 rounded-lg p-4 shadow-sm text-white">
          <p className="text-xl font-light leading-relaxed">
            Send quotes with<br />
            supplier<br />
            preferences
          </p>
        </div>
      </aside>
    </div>
  );
};

export default HeroSection;