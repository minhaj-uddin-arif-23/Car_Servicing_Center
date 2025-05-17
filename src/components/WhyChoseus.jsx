import React from "react";
import { FaTools, FaClock, FaShieldAlt, FaStar } from "react-icons/fa";

export default function WhyChoseus() {
  return (
    <section className="bg-white border-2 border-gray-200 rounded-2xl py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Icon Features */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <FaTools className="text-sky-600 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">Advanced Equipment</h4>
              <p className="text-gray-600 text-sm">We use the latest tools for precision servicing.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-sky-600 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">Quick Turnaround</h4>
              <p className="text-gray-600 text-sm">Get your car back on the road faster.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaShieldAlt className="text-sky-600 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">Trusted & Certified</h4>
              <p className="text-gray-600 text-sm">Certified experts with guaranteed quality.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaStar className="text-sky-600 text-3xl" />
            <div>
              <h4 className="text-lg font-semibold">Customer Rated 5-Star</h4>
              <p className="text-gray-600 text-sm">Hundreds of satisfied customers.</p>
            </div>
          </div>
        </div>

        {/* Right - Call to Action */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Car Servicing Center?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At NextArif AutoCare, we combine cutting-edge diagnostics with trusted hands to deliver exceptional service. Your vehicle is treated like our own.
          </p>
          <button className="btn btn-primary px-6 py-3 text-white rounded-md">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
