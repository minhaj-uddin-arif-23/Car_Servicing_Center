/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import HomeNavbar from "./HomeNavbar";
import {AuthProvider as AuthContext} from "../authContext/AuthContext";

const Register = () => {
  const { createUser, updateUserInfo, google } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", photo: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUser(formData.email, formData.password);
      await updateUserInfo(formData.name, formData.photo);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await google();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="w-11/12 mx-auto">
        <HomeNavbar />
      </div>

      {/* Register Form */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create an Account
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Photo URL</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeholder="https://example.com/photo.jpg"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Register
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 mb-4">Or register with a social account</p>
            <button
              onClick={handleGoogleSignIn}
              className="border-2 border-gray-200 text-2xl flex items-center justify-center py-2 px-4 rounded-md hover:bg-gray-100 transition w-full"
            >
              <FcGoogle className="text-xl" />
              <span className="ml-3 text-lg text-gray-800">Sign up with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t pt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <NavLink to="/signin" className="text-blue-600 hover:underline">
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
