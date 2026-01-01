'use client'
import { useState } from 'react';

const RecommendedItems = ({ apiData = null }) => {
  // Default static data - will be replaced by API data when available
  const defaultData = {
    title: 'Recommended items',
    products: [
      {
        id: 1,
        name: 'T-shirts with multiple colors, for men',
        price: '$10.30',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'
      },
      {
        id: 2,
        name: 'Jeans shorts for men blue color',
        price: '$10.30',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80'
      },
      {
        id: 3,
        name: 'Brown winter coat medium size',
        price: '$12.50',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80'
      },
      {
        id: 4,
        name: 'Jeans bag for travel for men',
        price: '$34.00',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80'
      },
      {
        id: 5,
        name: 'Leather wallet',
        price: '$99.00',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80'
      },
      {
        id: 6,
        name: 'Canon camera black, 100x zoom',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&q=80'
      },
      {
        id: 7,
        name: 'Headset for gaming with mic',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1612478441522-2f1f3d95e516?w=400&q=80'
      },
      {
        id: 8,
        name: 'Smartwatch silver color modern',
        price: '$10.30',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80'
      },
      {
        id: 9,
        name: 'Blue wallet for men leather metarfial',
        price: '$10.30',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80'
      },
      {
        id: 10,
        name: 'Jeans bag for travel for men',
        price: '$80.95',
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&q=80'
      }
    ]
  };

  const data = apiData || defaultData;

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    // Add navigation logic here
    // e.g., window.location.href = `/product/${product.id}`;
  };

  return (
    <div className="max-w-[90%] w-full mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
        {data.title}
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {data.products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gray-50 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 border-t border-gray-100">
              <p className="text-lg font-bold text-gray-900 mb-2">
                {product.price}
              </p>
              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example API Integration:
/*
Expected API Response Format:
{
  "title": "Recommended items",
  "products": [
    {
      "id": 1,
      "name": "T-shirts with multiple colors, for men",
      "price": "$10.30",
      "image": "url-to-product-image"
    }
  ]
}

Usage with API:
const [recommendedData, setRecommendedData] = useState(null);

useEffect(() => {
  fetch('/api/recommended-items')
    .then(res => res.json())
    .then(data => setRecommendedData(data));
}, []);

// With click handler for navigation
const RecommendedItemsWithNav = () => {
  return <RecommendedItems apiData={recommendedData} />;
};

// You can also add a custom click handler:
const handleProductClick = (product) => {
  window.location.href = `/product/${product.id}`;
};
*/

export default RecommendedItems;