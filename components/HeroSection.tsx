
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 md:py-32 overflow-hidden">
      <img
        src="https://picsum.photos/1920/1080?random=1"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Protect What Matters Most
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Comprehensive and reliable insurance solutions tailored to your life in the USA.
          Get peace of mind with Acme Insurance.
        </p>
        <a
          href="#quote"
          className="inline-block bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Your Free Quote Today
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
