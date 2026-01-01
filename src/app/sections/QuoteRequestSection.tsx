"use client"
import { useState } from 'react';
const QuoteRequestSection = ({ apiData = null, onSubmit = null }) => {
  // Default static data - will be replaced by API data when available
  const defaultData = {
    title: 'An easy way to send requests to all suppliers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    formTitle: 'Send quote to suppliers',
    placeholders: {
      item: 'What item you need?',
      details: 'Type more details',
      quantity: 'Quantity'
    },
    buttonText: 'Send inquiry',
    units: ['Pcs', 'Box', 'Kg', 'Meter', 'Liter', 'Set']
  };

  const data = apiData || defaultData;

  // Form state
  const [formData, setFormData] = useState({
    item: '',
    details: '',
    quantity: '',
    unit: 'Pcs'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.item || !formData.details || !formData.quantity) {
      alert('Please fill in all fields');
      return;
    }
    
    // If custom onSubmit handler provided, use it
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior - log to console
      console.log('Quote Request Submitted:', formData);
      
      // Reset form
      setFormData({
        item: '',
        details: '',
        quantity: '',
        unit: 'Pcs'
      });
      
      // Show success message (you can replace with toast/notification)
      alert('Quote request sent successfully!');
    }
  };

  return (
    <div className="relative my-10 max-w-[90%] rounded-md mx-auto w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 py-16 md:py-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {data.title}
            </h2>
            <p className="text-blue-50 text-base md:text-lg leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              {data.formTitle}
            </h3>

            <div className="space-y-4">
              {/* Item Input */}
              <div>
                <input
                  type="text"
                  name="item"
                  value={formData.item}
                  onChange={handleInputChange}
                  placeholder={data.placeholders.item}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Details Textarea */}
              <div>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={data.placeholders.details}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Quantity and Unit Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder={data.placeholders.quantity}
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    {data.units.map((unit, index) => (
                      <option key={index} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
              >
                {data.buttonText}
              </button>
            </div>
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
  "title": "An easy way to send requests to all suppliers",
  "description": "Lorem ipsum dolor sit amet...",
  "formTitle": "Send quote to suppliers",
  "placeholders": {
    "item": "What item you need?",
    "details": "Type more details",
    "quantity": "Quantity"
  },
  "buttonText": "Send inquiry",
  "units": ["Pcs", "Box", "Kg", "Meter", "Liter", "Set"]
}

Usage with API:
const [quoteData, setQuoteData] = useState(null);

useEffect(() => {
  fetch('/api/quote-section')
    .then(res => res.json())
    .then(data => setQuoteData(data));
}, []);

const handleQuoteSubmit = async (formData) => {
  try {
    const response = await fetch('/api/submit-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log('Quote submitted:', result);
    // Show success message
  } catch (error) {
    console.error('Error submitting quote:', error);
    // Show error message
  }
};

<QuoteRequestSection apiData={quoteData} onSubmit={handleQuoteSubmit} />
*/

export default QuoteRequestSection;