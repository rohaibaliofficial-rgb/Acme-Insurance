
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { FeatureProps, TestimonialProps } from './types';

const features: FeatureProps[] = [
  {
    icon: '🚗',
    title: 'Auto Insurance',
    description: 'Protect your vehicle and yourself on the road with comprehensive coverage options.',
  },
  {
    icon: '🏠',
    title: 'Home Insurance',
    description: 'Safeguard your home and belongings against unforeseen events like fire, theft, and natural disasters.',
  },
  {
    icon: '❤️',
    title: 'Life Insurance',
    description: 'Ensure your loved ones are financially secure in your absence with tailored life insurance policies.',
  },
  {
    icon: '⚕️',
    title: 'Health Insurance',
    description: 'Access quality healthcare services without financial stress with our flexible health plans.',
  },
  {
    icon: '💼',
    title: 'Business Insurance',
    description: 'Comprehensive protection for your business assets, employees, and liabilities.',
  },
  {
    icon: '🤝',
    title: 'Personalized Service',
    description: 'Our expert agents provide personalized advice to find the perfect plan for you.',
  },
];

const testimonials: TestimonialProps[] = [
  {
    quote: "Acme Insurance made getting auto insurance so easy! Their rates were great, and the process was seamless.",
    customerName: "Sarah J.",
    avatarUrl: "https://picsum.photos/100/100?random=2",
  },
  {
    quote: "I had a great experience with Acme for my home insurance. The claim was handled quickly and professionally.",
    customerName: "Michael P.",
    avatarUrl: "https://picsum.photos/100/100?random=3",
  },
  {
    quote: "Highly recommend Acme Insurance for life insurance. They helped me understand my options and choose the best plan.",
    customerName: "Emily R.",
    avatarUrl: "https://picsum.photos/100/100?random=4",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />

        <section id="testimonials" className="py-16 bg-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
