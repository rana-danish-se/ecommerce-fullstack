"use client";
import { useState, useEffect } from "react";

const DealsAndOffers = ({ apiData = null }) => {
  const defaultDeals = {
    title: "Deals and offers",
    subtitle: "Hygiene equipments",
    countdown: {
      days: 4,
      hours: 13,
      minutes: 34,
      seconds: 56,
    },
    products: [
      {
        id: 1,
        name: "Smart watches",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
        discount: "-25%",
      },
      {
        id: 2,
        name: "Laptops",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
        discount: "-15%",
      },
      {
        id: 3,
        name: "GoPro cameras",
        image:
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80",
        discount: "-40%",
      },
      {
        id: 4,
        name: "Headphones",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
        discount: "-25%",
      },
      {
        id: 5,
        name: "Canon cameras",
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
        discount: "-25%",
      },
    ],
  };

  // Use API data if available, otherwise use default data
  const dealsData = apiData || defaultDeals;

  // State for countdown timer
  const [countdown, setCountdown] = useState(dealsData.countdown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return prev;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mx-auto px-4 md:px-6 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden lg:flex">
        {/*Left Div*/}
        <div className="lg:w-[280px] lg:shrink-0 bg-gray-50 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {dealsData.title}
          </h2>
          <p className="text-gray-500 text-sm mb-6">{dealsData.subtitle}</p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gray-700 rounded-lg p-2 text-center">
              <div className="text-white text-xl font-bold">
                {String(countdown.days).padStart(2, "0")}
              </div>
              <div className="text-white text-xs mt-1">Days</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2 text-center">
              <div className="text-white text-xl font-bold">
                {String(countdown.hours).padStart(2, "0")}
              </div>
              <div className="text-white text-xs mt-1">Hour</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2 text-center">
              <div className="text-white text-xl font-bold">
                {String(countdown.minutes).padStart(2, "0")}
              </div>
              <div className="text-white text-xs mt-1">Min</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2 text-center">
              <div className="text-white text-xl font-bold">
                {String(countdown.seconds).padStart(2, "0")}
              </div>
              <div className="text-white text-xs mt-1">Sec</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {/* Right Section - Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-full">
            {dealsData.products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${
                  index !== dealsData.products.length - 1
                    ? "border-r border-b sm:border-b-0 border-gray-200"
                    : ""
                } ${index < 2 ? "border-b sm:border-b-0" : ""}`}
              >
                {/* Product Image */}
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-center text-sm font-medium text-gray-700 mb-2">
                  {product.name}
                </h3>

                {/* Discount Badge */}
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsAndOffers;
