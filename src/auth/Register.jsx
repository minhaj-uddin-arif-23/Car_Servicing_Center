import React from "react";
import HomeNavbar from "./HomeNavbar";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="w-11/12 mx-auto bg-gray-100">
        <HomeNavbar />
      </div>

      {/* Register Form */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create an Account
          </h2>

          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://your-photo-url.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 border-t pt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <NavLink  to={'/signin'} className="text-blue-600 hover:underline">
              Login here
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
