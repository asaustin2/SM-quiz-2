'use client';

import { useState } from 'react';

interface LeadFormProps {
  onSubmit: (data: any) => void;
  score: number;
}

export default function LeadForm({ onSubmit, score }: LeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    marketingBudget: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, score }),
      });
      
      if (response.ok) {
        onSubmit({ ...formData, score });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still proceed to show results even if API fails
      onSubmit({ ...formData, score });
    }
  };

  const isEligibleForSwag = score >= 80;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        {isEligibleForSwag ? (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-4">
              Congratulations! 🎉
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              You scored <span className="font-bold text-green-600">{score}%</span>!
            </p>
            <p className="text-lg text-gray-600">
              You qualify for free Sendoso swag! Fill out the form below to claim your prize.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Almost There! 🌊
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              You scored <span className="font-bold text-orange-600">{score}%</span>
            </p>
            <p className="text-lg text-gray-600">
              Get your results and try again to score 80% or higher for free swag!
            </p>
          </>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Job Title *
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="marketingBudget" className="block text-sm font-medium text-gray-700 mb-2">
            Annual Marketing Budget
          </label>
          <select
            id="marketingBudget"
            name="marketingBudget"
            value={formData.marketingBudget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="<50k">Less than $50k</option>
            <option value="50k-100k">$50k - $100k</option>
            <option value="100k-500k">$100k - $500k</option>
            <option value="500k-1m">$500k - $1M</option>
            <option value=">1m">More than $1M</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
        >
          {isEligibleForSwag ? 'Claim Your Swag! 🎁' : 'Get My Results'}
        </button>
      </form>
    </div>
  );
}