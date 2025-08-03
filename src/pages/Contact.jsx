import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  const wrapperClass = {
    theme1: 'bg-gray-100 text-black',
    theme2: 'bg-gray-800 text-white font-semibold',
    theme3: 'bg-pink-50 text-indigo-900',
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12">
      <div
        className={`
          ${wrapperClass[theme]} 
          max-w-4xl mx-auto rounded-xl shadow-md 
          p-4 sm:p-6 md:p-8 transition-all duration-300
        `}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-center mb-8">
          We'd love to hear from you! Fill out the form and we'll get back to you soon.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm"
                placeholder="Enter First Name"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm"
              placeholder="abc@domain.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm"
              placeholder="Query/Suggestion..."
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="mt-2 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
