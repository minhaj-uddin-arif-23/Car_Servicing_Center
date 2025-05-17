import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar px-4 md:px-10 lg:px-20 fixed z-50 bg-white/80 bg-opacity-80 backdrop-blur-sm shadow-md text-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/About"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/upcomingservice"}>Upcoming Service</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className=" font-bold text-blue-700 text-3xl">
            Car Service
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/upcomingservice"}>Upcoming Service</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <NavLink
            to={"signin"}
            className={"btn btn-primary text-white rounded-lg "}
          >
            Sign In
          </NavLink>
          <NavLink
            to={"signup"}
            className={"btn btn-primary text-white rounded-lg"}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
