import React from 'react';

export default function HomePartTwo() {
  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Left */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/suv-maintenance-professional-service-station_279525-1511.jpg?ga=GA1.1.1974556110.1745246806&semt=ais_hybrid&w=740"
            alt="Car Repair in Action"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text Right */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Precision Repairs, Trusted Mechanics
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            From regular check-ups to emergency repairs, our skilled professionals ensure
            your car gets the best care using modern equipment and genuine parts.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Advanced Diagnostics & Repair</li>
            <li>Honest Pricing, No Surprises</li>
            <li>Quick Turnaround Time</li>
          </ul>
          <button className="btn btn-primary">Book Your Service</button>
        </div>
      </div>
    </div>
  );
}
