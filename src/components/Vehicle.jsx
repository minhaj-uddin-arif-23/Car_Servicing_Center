import React from "react";
import { FaCheck } from "react-icons/fa";

const brands = [
  "General Motors", "Land Rover", "Lexus", "Lincoln", "Mazda",
  "Mercedes – Benz", "Mercury", "Mitsubishi", "Nissan", "Renault",
  "Plymouth", "Pontiac Porsche", "Rover", "Saab", "Saleen"
];

export default function VehiclesServiced() {
  return (
    <div className="bg-gray- py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/hands-car-mechanic-with-wrench-garage_146671-19708.jpg?ga=GA1.1.1974556110.1745246806&semt=ais_hybrid&w=740" // Use the uploaded image path or a hosted one
            alt="Vehicles in Service Center"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">VEHICLES SERVICED</h2>
          <div className="w-20 h-1 bg-sky-600 mb-6" />
          <p className="text-lg text-gray-600 mb-4">
            We provide top notch maintenance service for all types of vehicles.
            We are certified to service and repair the following makes:
          </p>

          {/* Brands List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-gray-700 text-sm mb-8">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheck className="text-blue-600 text-sm" />
                <span>{brand}</span>
              </div>
            ))}
          </div>

          <button className="border border-gray-400 px-6 py-2 text-blue-700 hover:bg-blue-50 transition rounded">
            VIEW FULL LIST
          </button>
        </div>
      </div>
    </div>
  );
}
