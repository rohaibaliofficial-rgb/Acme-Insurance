
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-700 flex items-center">
          <img src="https://picsum.photos/32/32" alt="Acme Insurance Logo" className="mr-2 rounded-full" />
          Acme Insurance
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-700 transition duration-300">Home</a>
          <a href="#quote" className="text-gray-600 hover:text-blue-700 transition duration-300">Get a Quote</a>
          <a href="#services" className="text-gray-600 hover:text-blue-700 transition duration-300">Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition duration-300">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-700 transition duration-300">Contact Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-gray-600 hover:text-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#quote" className="text-gray-600 hover:text-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Get a Quote</a>
            <a href="#services" className="text-gray-600 hover:text-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700 transition duration-300" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
