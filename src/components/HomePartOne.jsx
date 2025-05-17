import React from "react";

export default function HomePartOne() {
  return (
    <div className="hero bg-base-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg"
          alt="Professional Car Servicing"
          className="max-w-md lg:max-w-xl rounded-lg shadow-2xl"
        />
        <div className="lg:mr-10">
          <h1 className="text-5xl font-bold text-sky-700">
            Reliable Car Servicing You Can Trust
          </h1>
          <p className="py-6 text-lg text-gray-700">
            We offer expert car diagnostics, repairs, and maintenance services.
            Get fast, affordable, and professional care for your vehicle.
            Satisfaction guaranteed.
          </p>
          <ul className="mb-6 list-disc pl-5 text-gray-600">
            <li>Certified and experienced mechanics</li>
            <li>Modern diagnostic equipment</li>
            <li>Transparent pricing & fast service</li>
          </ul>
          <button className="btn btn-primary">Book a Service Now</button>
        </div>
      </div>
    </div>
  );
}
