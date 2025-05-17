/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import {
  Wrench,
  Home,
  UserCircle,
  Hammer,
  CalendarClock,
  FileText,
  Mail,
  LogIn,
  UserPlus,
} from "lucide-react";
import im1 from '../../src/assets/images/car.png'
import { useContext, useState } from "react";
import {AuthProvider as AuthContext} from "../authContext/AuthContext";
export default function Navbar() {
  const { user, signout } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar px-4 md:px-10 lg:px-20 fixed z-50 bg-white/80 backdrop-blur-sm shadow-md text-gray-900">
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <NavLink to={"/"}>
                  <Home className="w-4 h-4 mr-1" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/About"}>
                  <UserCircle className="w-4 h-4 mr-1" /> About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>
                  <Hammer className="w-4 h-4 mr-1" /> Service
                </NavLink>
              </li>
              <li>
                <NavLink to={"/upcomingservice"}>
                  <CalendarClock className="w-4 h-4 mr-1" /> Upcoming
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>
                  <FileText className="w-4 h-4 mr-1" /> Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  <Mail className="w-4 h-4 mr-1" /> Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo + Brand */}
   <NavLink
  to={"/"}
  className="  flex items-center gap-2 font-bold text-blue-600 text-3xl lg:mr-10 md:mr-0 mr-7"
>

  <span> <img src={im1} alt="" className="hidden md:block w-9 h-7 mt-1  text-black"/> </span>
 <span className="text-2xl md:text-3xl lg:text-2xl"> Car<span className="text-sky-600">Care</span> </span>
</NavLink>


        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex lg: md:mr-0">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to={"/"}>
                <Home className="w-4 h-4 mr-1" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>
                <UserCircle className="w-4 h-4 mr-1" /> About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>
                <Hammer className="w-4 h-4 mr-1" /> Service
              </NavLink>
            </li>
            <li>
              <NavLink to={"/upcomingservice"}>
                <CalendarClock className="w-4 h-4 mr-1" /> Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>
                <FileText className="w-4 h-4 mr-1" /> Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                <Mail className="w-4 h-4 mr-1" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
   <div className="navbar-end gap-3">
  {user ? (
    <div className="flex items-center gap-3">
      {/* Avatar */}
      <img
        src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} // Fallback avatar
        alt="User Avatar"
        className="w-8 h-8 rounded-full border border-gray-300"
      />

      {/* Sign Out Button */}
      <button
        onClick={signout}
        className="btn btn-sm btn-outline text-blue-600 rounded-lg"
      >
        Sign Out
      </button>
    </div>
  ) : (
    <>
      <NavLink
        to={"signin"}
        className="btn btn-sm btn-primary btn-outline rounded-lg flex items-center gap-2"
      >
        <LogIn className="w-4 h-4" />
        Sign In
      </NavLink>
      <NavLink
        to={"signup"}
        className="btn btn-sm btn-primary btn-outline  rounded-lg flex items-center gap-2"
      >
        <UserPlus className="w-4 h-4" />
        Sign Up
      </NavLink>
    </>
  )}
</div>

      </div>
    </div>
  );
}
