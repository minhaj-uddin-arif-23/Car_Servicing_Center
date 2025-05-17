import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-400 p-6 relative overflow-hidden">
      {/* Left Content */}
      <div className="flex items-center gap-4 z-10">
        <Mail className="w-10 h-10 text-white" />
        <div>
          <p className="text-black text-sm font-semibold">SUBSCRIBE</p>
          <p className="text-white text-xl font-extrabold">OUR NEWSLETTER</p>
        </div>
      </div>

      {/* Input + Button */}
      <div className="flex mt-4 md:mt-0 z-10 w-full md:w-auto">
        <input
          type="email"
          placeholder="Email address"
          className="p-3 w-full md:w-[400px] text-gray-700 placeholder-gray-500 bg-white rounded-l-md outline-none"
        />
        <button className="bg-[#1a1f24] hover:bg-black text-white px-6 py-3 rounded-r-md flex items-center gap-2">
          Subscribe
          <span className="text-lg">›</span>
        </button>
      </div>

      {/* Decorative diagonal lines */}
      <div className="absolute top-0 right-0 h-full w-2/5 hidden md:block">
        <div className="absolute top-0 bottom-0 right-0 w-full bg-[#111519] -skew-x-12 origin-right"></div>
        <div className="absolute top-0 bottom-0 right-16 w-1 bg-blue-400 -skew-x-12"></div>
        <div className="absolute top-0 bottom-0 right-24 w-1 bg-blue-400 -skew-x-12"></div>
        <div className="absolute top-0 bottom-0 right-32 w-1 bg-blue-400 -skew-x-12"></div>
      </div>
    </div>
  );
}
