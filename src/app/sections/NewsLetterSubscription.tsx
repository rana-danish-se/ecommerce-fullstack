"use client"
import { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSubscription = ({ apiData = null, onSubscribe = null }) => {
  // Default static data - will be replaced by API data when available
  const defaultData = {
    title: 'Subscribe on our newsletter',
    description: 'Get daily news on upcoming offers from many suppliers all over the world',
    buttonText: 'Subscribe',
    placeholder: 'Email'
  };

  const data = apiData || defaultData;

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // If custom onSubscribe handler provided, use it
    if (onSubscribe) {
      await onSubscribe(email);
    } else {
      // Default behavior
      console.log('Newsletter subscription:', email);
      
      // Simulate API call
      setTimeout(() => {
        alert('Successfully subscribed to newsletter!');
        setEmail('');
        setIsLoading(false);
      }, 1000);
      return;
    }

    setIsLoading(false);
    setEmail('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {data.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8">
          {data.description}
        </p>

        {/* Subscription Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          {/* Email Input */}
          <div className="flex-grow relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={data.placeholder}
              className="w-full pl-12 pr-4 py-3 md:py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isLoading}
            />
          </div>

          {/* Subscribe Button */}
          <button
            onClick={handleSubscribe}
            disabled={isLoading}
            className="bg-blue-600 text-white font-semibold px-8 py-3 md:py-4 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Example API Integration:
/*
Expected API Response Format:
{
  "title": "Subscribe on our newsletter",
  "description": "Get daily news on upcoming offers from many suppliers all over the world",
  "buttonText": "Subscribe",
  "placeholder": "Email"
}

Usage with API:
const [newsletterData, setNewsletterData] = useState(null);

useEffect(() => {
  fetch('/api/newsletter-config')
    .then(res => res.json())
    .then(data => setNewsletterData(data));
}, []);

const handleNewsletterSubscribe = async (email) => {
  try {
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    if (response.ok) {
      alert('Successfully subscribed!');
    } else {
      alert('Subscription failed. Please try again.');
    }
  } catch (error) {
    console.error('Error subscribing:', error);
    alert('An error occurred. Please try again.');
  }
};

<NewsletterSubscription 
  apiData={newsletterData} 
  onSubscribe={handleNewsletterSubscribe} 
/>
*/

export default NewsletterSubscription;