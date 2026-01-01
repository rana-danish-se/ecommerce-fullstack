"use client";
import React from "react";

const ConsumerElectronics = ({ apiData = null }) => {
  // Default static data - will be replaced by API data when available
  const defaultData = {
    title: "",
    buttonText: "Source now",
    bannerImage:
      "/assets/image/backgrounds/consumer.png",
    products: [
      {
        id: 1,
        name: "Soft chairs",
        price: "USD 19",
        image:
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
      },
      {
        id: 2,
        name: "Sofa & chair",
        price: "USD 19",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
      },
      {
        id: 3,
        name: "Kitchen dishes",
        price: "USD 19",
        image:
          "https://images.unsplash.com/photo-1584990347449-39b4c01c7d4f?w=400&q=80",
      },
      {
        id: 4,
        name: "Smart watches",
        price: "USD 19",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      },
      {
        id: 5,
        name: "Kitchen mixer",
        price: "USD 100",
        image:
          "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&q=80",
      },
      {
        id: 6,
        name: "Blenders",
        price: "USD 39",
        image:
          "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80",
      },
      {
        id: 7,
        name: "Home appliance",
        price: "USD 19",
        image:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80",
      },
      {
        id: 8,
        name: "Coffee maker",
        price: "USD 10",
        image:
          "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80",
      },
    ],
  };

  const data = apiData || defaultData;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-0">
          {/* Left Banner Section */}
          <div
            className="lg:col-span-2 relative bg-cover bg-center min-h-[250px] "
            style={{
              backgroundImage: `url(${data.bannerImage})`,
              backgroundColor: "",
            }}
          >
            <div className="absolute inset-0 bg-[#C4C4C4] opacity-10" />
            <div className="relative h-full p-8 flex flex-col ">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1 leading-tight">
                  Consumer electronics and gadgets
                </h2>
              </div>
              <button className="bg-white text-gray-800 mt-5    px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors shadow-md w-fit">
                {data.buttonText}
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4">
            {data.products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative p-4 flex flex-row items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${
                  index % 4 !== 3 ? "border-r" : ""
                } ${index < 4 ? "border-b" : ""} border-gray-200`}
              >
                {/* Product Info */}
                <div className="flex-1 pr-2">
                  <h3 className="text-sm font-medium text-gray-900 mb-1 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-0.5">From</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {product.price}
                  </p>
                </div>

                {/* Product Image */}
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example API Integration:
/*
Expected API Response Format:
{
  "title": "Home and outdoor",
  "buttonText": "Source now",
  "bannerImage": "url-to-banner-image",
  "products": [
    {
      "id": 1,
      "name": "Soft chairs",
      "price": "USD 19",
      "image": "url-to-product-image"
    }
  ]
}

Usage:
const [homeData, setHomeData] = useState(null);

useEffect(() => {
  fetch('/api/home-outdoor')
    .then(res => res.json())
    .then(data => setHomeData(data));
}, []);

<HomeAndOutdoor apiData={homeData} />
*/

export default ConsumerElectronics;
