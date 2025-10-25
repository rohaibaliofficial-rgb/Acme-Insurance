
import React from 'react';
import { TestimonialProps } from '../types';

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, customerName, avatarUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <img
        src={avatarUrl}
        alt={customerName}
        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-200"
      />
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-semibold text-blue-700">- {customerName}</p>
    </div>
  );
};

export default TestimonialCard;
