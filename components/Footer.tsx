
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">Acme Insurance</h3>
            <p className="text-gray-400 mt-2">Protecting your future, today.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Sitemap</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Acme Insurance. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            123 Insurance Plaza, Anytown, USA 12345 | (555) 123-4567 | info@acmeinsurance.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
