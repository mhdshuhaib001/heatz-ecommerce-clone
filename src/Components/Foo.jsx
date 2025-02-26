import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && acceptedTerms) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
      setAcceptedTerms(false);
    } else {
      alert('Please enter email and accept the terms');
    }
  };
  
  const mobileLinks = [
    { name: 'Earphones', href: '#' },
    { name: 'Cables', href: '#' },
    { name: 'Adapters', href: '#' },
    { name: 'Power Bank', href: '#' },
    { name: 'Batteries', href: '#' },
    { name: 'Car Charger', href: '#' },
    { name: 'Holders', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Smartwatches', href: '#' },
  ];
  
  const computerLinks = [
    { name: 'Earphones', href: '#' },
    { name: 'Cables', href: '#' },
    { name: 'Adapters', href: '#' },
    { name: 'Power Bank', href: '#' },
    { name: 'Batteries', href: '#' },
    { name: 'Car Charger', href: '#' },
    { name: 'Holders', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Smartwatches', href: '#' },
  ];
  
  const helpLinks = [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Payment Methods', href: '#' },
    { name: 'Track Your Order', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Delivery Policy', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
  ];

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:pr-8">
            <div className="text-4xl font-bold text-emerald-400 tracking-wide mb-6">HEATZ</div>
            
            <p className="mb-8 text-gray-500 max-w-md">
              Heatz® is a registered brand of Ashtelgroup. It is registered in different countries
              including Saudi Arabia and UAE. Especially in the middle east, Heatz® is well known
              for its variety and quality of products launched in every seasons.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex border-b border-gray-700 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent flex-grow py-2 focus:outline-none text-white"
                />
                <button type="submit" className="text-white p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={() => setAcceptedTerms(!acceptedTerms)}
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-xs text-gray-500">
                  I confirm acceptance of the Privacy Policy and consent to its terms, including the use of cookies.
                </label>
              </div>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-medium mb-4">Mob Acc</h3>
                <ul className="space-y-2">
                  {mobileLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-4">Com Acc</h3>
                <ul className="space-y-2">
                  {computerLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-4">Help</h3>
                <ul className="space-y-2">
                  {helpLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
          Copyright © 2024 Heatz - All rights reserved. | Developed by <a href="#" className="hover:text-emerald-400">AdAgency ( Technologies )</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;