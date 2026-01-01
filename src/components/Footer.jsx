"use client"
import { useState } from 'react';
import { ShoppingBag, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronDown } from 'lucide-react';

const Footer = ({ apiData = null }) => {
  // Default static data - will be replaced by API data when available
  const defaultData = {
    brand: {
      name: 'Brand',
      description: 'Best information about the company gies here but now lorem ipsum is',
      logo: null // Will use default icon if null
    },
    sections: [
      {
        title: 'About',
        links: [
          { name: 'About Us', url: '/about' },
          { name: 'Find store', url: '/stores' },
          { name: 'Categories', url: '/categories' },
          { name: 'Blogs', url: '/blogs' }
        ]
      },
      {
        title: 'Partnership',
        links: [
          { name: 'About Us', url: '/partnership/about' },
          { name: 'Find store', url: '/partnership/stores' },
          { name: 'Categories', url: '/partnership/categories' },
          { name: 'Blogs', url: '/partnership/blogs' }
        ]
      },
      {
        title: 'Information',
        links: [
          { name: 'Help Center', url: '/help' },
          { name: 'Money Refund', url: '/refund' },
          { name: 'Shipping', url: '/shipping' },
          { name: 'Contact us', url: '/contact' }
        ]
      },
      {
        title: 'For users',
        links: [
          { name: 'Login', url: '/login' },
          { name: 'Register', url: '/register' },
          { name: 'Settings', url: '/settings' },
          { name: 'My Orders', url: '/orders' }
        ]
      }
    ],
    apps: {
      title: 'Get app',
      appStore: 'https://www.apple.com/app-store/',
      googlePlay: 'https://play.google.com/store'
    },
    socialMedia: [
      { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
      { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
      { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
      { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' }
    ],
    copyright: '© 2023 Ecommerce.',
    languages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ]
  };

  const data = apiData || defaultData;
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const getSocialIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5" };
    
    switch (iconName) {
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'youtube':
        return <Youtube {...iconProps} />;
      default:
        return null;
    }
  };

  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    setIsLanguageOpen(false);
    console.log('Language changed to:', langCode);
  };

  const currentLanguage = data.languages.find(lang => lang.code === selectedLanguage);

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-400">
                {data.brand.name}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {data.brand.description}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2">
              {data.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {data.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get App Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {data.apps.title}
            </h3>
            <div className="space-y-3">
              <a
                href={data.apps.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
                  <div className="text-[10px]">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href={data.apps.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
                  <div className="text-[10px]">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              {data.copyright}
            </p>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>{currentLanguage?.flag}</span>
                <span className="font-medium">{currentLanguage?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute bottom-full mb-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px] z-10">
                  {data.languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${
                        selectedLanguage === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Example API Integration:
/*
Expected API Response Format:
{
  "brand": {
    "name": "Brand",
    "description": "Best information about the company...",
    "logo": null
  },
  "sections": [
    {
      "title": "About",
      "links": [
        { "name": "About Us", "url": "/about" }
      ]
    }
  ],
  "apps": {
    "title": "Get app",
    "appStore": "https://www.apple.com/app-store/",
    "googlePlay": "https://play.google.com/store"
  },
  "socialMedia": [
    { "name": "Facebook", "icon": "facebook", "url": "https://facebook.com" }
  ],
  "copyright": "© 2023 Ecommerce.",
  "languages": [
    { "code": "en", "name": "English", "flag": "🇺🇸" }
  ]
}

Usage with API:
const [footerData, setFooterData] = useState(null);

useEffect(() => {
  fetch('/api/footer-config')
    .then(res => res.json())
    .then(data => setFooterData(data));
}, []);

<Footer apiData={footerData} />
*/

export default Footer;