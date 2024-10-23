import React from "react";
import { FiMail, FiPhone } from "react-icons/fi"; // Using react-icons for email and phone icons

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mx-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full min-w-80 max-w-lg">
        {/* Contact Form Title */}
        <h3 className="text-teal-600 text-center font-semibold text-sm mb-2">
          #CONTACT US
        </h3>
        <h1 className="text-[#353535] text-center font-bold text-3xl mb-4">
          Get in Touch
        </h1>
        <p className="text-[#929394] text-center mb-6">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiPhone className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Dropdown Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              How did you find us?
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select an option</option>
              <option value="search-engine">Search Engine</option>
              <option value="social-media">Social Media</option>
              <option value="friend">A Friend</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
    