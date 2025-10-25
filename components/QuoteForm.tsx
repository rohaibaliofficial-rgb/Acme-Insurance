
import React, { useState } from 'react';
import { InsuranceType, QuoteResponse } from '../types';
import { getInsuranceQuote } from '../services/geminiService';

const QuoteForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [insuranceType, setInsuranceType] = useState<InsuranceType>(InsuranceType.AUTO);
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setQuote(null);
    setError(null);

    try {
      const result = await getInsuranceQuote({ name, email, insuranceType, details });
      setQuote(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">Get Your Personalized Quote</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-blue-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="insuranceType" className="block text-gray-700 text-sm font-bold mb-2">
                Type of Insurance
              </label>
              <select
                id="insuranceType"
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={insuranceType}
                onChange={(e) => setInsuranceType(e.target.value as InsuranceType)}
                required
              >
                {Object.values(InsuranceType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">
                Additional Details (e.g., car make/model, home address, age)
              </label>
              <textarea
                id="details"
                rows={5}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Tell us more about what you need to insure..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Quote...
                </div>
              ) : (
                'Generate My Quote'
              )}
            </button>
          </form>

          {error && (
            <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
              <p className="mt-2 text-sm">Please ensure your API key is configured correctly and try again.</p>
            </div>
          )}

          {quote && (
            <div className="mt-8 p-6 bg-green-50 border border-green-300 rounded-lg shadow-inner">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Your Estimated Quote:</h3>
              <p className="text-xl font-semibold text-gray-900 mb-2">Plan: {quote.planName}</p>
              <p className="text-3xl font-extrabold text-blue-700 mb-4">Premium: {quote.premium}</p>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Coverage Details:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {quote.coverageDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic">
                {quote.disclaimer || "This is an estimated quote and may vary based on a full assessment."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
