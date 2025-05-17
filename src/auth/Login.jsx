import React, { useContext } from "react";


import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import HomeNavbar from "./HomeNavbar";
import { AuthProvider as AuthContext} from "../authContext/AuthContext";

export default function Login() {

  
  const navigate = useNavigate()
  const location =useLocation()
  const from = location?.state || '/'
  const {signIn,google} = useContext(AuthContext)

  const handleGoogle = async () => {
   try{
    await google()
    toast.success("Sign in successfuly")
    navigate(from,{replace:true})
   }catch(err){
    toast.error(err?.message)
   }
  }

  const handleSignIn =async (e) => {
    e.preventDefault()
    const form = e.target;
    const email= form.email.value
    const password= form.password.value
    console.log(email,password)
    try{
      await signIn(email,password)
      toast.success("SignIn successfullt")
      navigate(from , {replace:true})
    }catch(err){
      toast.error(err?.message)
    }
  }  
  return (
    <div className="min-h-[70vh] bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="w-11/12 mx-auto">
        <HomeNavbar />
      </div>

   

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
           Sign In
          </h2>
   

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 border-t pt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </NavLink>
          </div>
                    {/* Social Login */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 mb-4">Sign in with a social account</p>
        <div className="form-control mb-6 flex justify-center">
          <button onClick={handleGoogle}
            className="border-2 border-gray-200 text-2xl flex py-2 rounded-md px-4 hover:bg-gray-100 transition items-center"
          >
            <FcGoogle className="text-xl" />
            <span className="ml-3 text-lg text-gray-800">Sign in with Google</span>
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
