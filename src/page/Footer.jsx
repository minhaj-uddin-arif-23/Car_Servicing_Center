import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">ArifX Car Services</h2>
          <p className="text-sm mb-3">
            We provide premium car maintenance, repairs, diagnostics, and detailing services to ensure your vehicle runs smoothly and looks its best.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <FaPhone className="text-blue-400" />
            <span>+880 1234 567890</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-blue-400" />
            <span>support@arifxcar.com</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Banani, Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>🛠️ General Repair</li>
            <li>🔍 Engine Diagnostics</li>
            <li>🧼 Car Detailing</li>
            <li>⚙️ Transmission Services</li>
            <li>🔧 Tire & Brake Services</li>
            <li>🚗 Custom Modifications</li>
          </ul>
        </div>

        {/* Support & Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Pricing & Packages</li>
            <li>Booking Process</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
          </ul>
        </div>

        {/* Opening Hours & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2"><FaRegClock className="text-blue-400" /> Mon - Fri: 9am - 8pm</li>
            <li className="flex items-center gap-2"><FaRegClock className="text-blue-400" /> Sat: 10am - 6pm</li>
            <li className="flex items-center gap-2"><FaRegClock className="text-blue-400" /> Sun: Closed</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ArifX Car Services. All rights reserved.
      </div>
    </footer>
  );
}
