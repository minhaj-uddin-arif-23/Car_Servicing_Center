import React from "react";
import {
  Wrench,
  Smile,
  SearchCheck,
  BadgeCheck,
} from "lucide-react"; // Optional: use Heroicons if you prefer

const features = [
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    title: "We're Experts",
    description:
      "Certified technicians with years of hands-on experience in diagnostics, repair, and vehicle maintenance.",
  },
  {
    icon: <Smile className="h-8 w-8 text-blue-600" />,
    title: "We're Friendly",
    description:
      "Customer satisfaction is our priority. Enjoy stress-free service with a welcoming and respectful team.",
  },
  {
    icon: <SearchCheck className="h-8 w-8 text-blue-600" />,
    title: "We're Accurate",
    description:
      "Using cutting-edge tools, we detect and fix issues with precision to ensure optimal performance.",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-blue-600" />,
    title: "We're Trusted",
    description:
      "Backed by hundreds of positive reviews and repeat customers who trust us with their vehicles.",
  },
];

export default function Feature() {
  return (
    <section className="bg-gray- border-2 border-gray-200 rounded-3xl py-20 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="mt-2 text-gray-600">
          Trusted, Professional & Customer-Focused Car Servicing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">{item.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <div className="w-10 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
