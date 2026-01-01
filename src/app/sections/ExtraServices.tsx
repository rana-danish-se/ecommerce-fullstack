"use client"
import { useState } from 'react';
import { Search, Package, Plane, ShieldCheck } from 'lucide-react';

const ExtraServices = ({ apiData = null }) => {
  // Default static data - will be replaced by API data when available
  const defaultData = {
    title: 'Our extra services',
    services: [
      {
        id: 1,
        title: 'Source from Industry Hubs',
        icon: 'search',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        link: '/services/sourcing'
      },
      {
        id: 2,
        title: 'Customize Your Products',
        icon: 'package',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
        link: '/services/customize'
      },
      {
        id: 3,
        title: 'Fast, reliable shipping by ocean or air',
        icon: 'plane',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
        link: '/services/shipping'
      },
      {
        id: 4,
        title: 'Product monitoring and inspection',
        icon: 'shield',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
        link: '/services/inspection'
      }
    ]
  };

  const data = apiData || defaultData;

  const getIcon = (iconName) => {
    const iconProps = { className: "w-8 h-8 text-blue-600" };
    
    switch (iconName) {
      case 'search':
        return <Search {...iconProps} />;
      case 'package':
        return <Package {...iconProps} />;
      case 'plane':
        return <Plane {...iconProps} />;
      case 'shield':
        return <ShieldCheck {...iconProps} />;
      default:
        return <Search {...iconProps} />;
    }
  };

  const handleServiceClick = (service) => {
    console.log('Service clicked:', service);
    // Add navigation logic here
    // window.location.href = service.link;
  };

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
          {data.title}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 right-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Service Title */}
              <div className="p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example API Integration:
/*
Expected API Response Format:
{
  "title": "Our extra services",
  "services": [
    {
      "id": 1,
      "title": "Source from Industry Hubs",
      "icon": "search",
      "image": "url-to-service-image",
      "link": "/services/sourcing"
    }
  ]
}

Icon options: 'search', 'package', 'plane', 'shield'

Usage with API:
const [servicesData, setServicesData] = useState(null);

useEffect(() => {
  fetch('/api/extra-services')
    .then(res => res.json())
    .then(data => setServicesData(data));
}, []);

// With navigation
const handleServiceClick = (service) => {
  window.location.href = service.link;
  // or with React Router:
  // navigate(service.link);
};

<ExtraServices apiData={servicesData} />
*/

export default ExtraServices;