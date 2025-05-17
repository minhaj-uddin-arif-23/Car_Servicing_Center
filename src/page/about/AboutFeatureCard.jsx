import { ReactNode } from "react";

export default function AboutFeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4 p-6 border rounded-md shadow-sm bg-white">
      <div className="bg-blue-600 text-white p-4 rounded-full text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
