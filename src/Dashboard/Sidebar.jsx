import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Hammer,
  UserCircle,
  Wrench,
  ClipboardList,
  UserPlus,
  Menu,
  X,
  HomeIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { AuthProvider as AuthContext } from "../authContext/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const role = user?.role || "admin";
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  const navItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4 inline mr-2" />,
    },
    ...(role === "admin"
      ? [
          {
            path: "/dashboard/admin-profile",
            label: "Admin Profile",
            icon: <UserCircle className="w-4 h-4 inline mr-2" />,
          },
          {
            path: "/dashboard/add-service",
            label: "Add Car Service",
            icon: <Hammer className="w-4 h-4 inline mr-2" />,
          },
          {
            path: "/dashboard/manage-service",
            label: "Manage Services",
            icon: <Wrench className="w-4 h-4 inline mr-2" />,
          },
          {
            path: "/dashboard/all-users",
            label: "See All Users",
            icon: <UserPlus className="w-4 h-4 inline mr-2" />,
          },
          {
            path: "/",
            label: "Go To Home",
            icon: <HomeIcon className="w-4 h-4 inline mr-2" />,
          },
        ]
      : [
          {
            path: "/dashboard/user-profile",
            label: "User Profile",
            icon: <UserCircle className="w-4 h-4 inline mr-2" />,
          },
          {
            path: "/dashboard/my-orders",
            label: "My Orders",
            icon: <ClipboardList className="w-4 h-4 inline mr-2" />,
          },
        ]),
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md md:hidden">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block md:w-64 bg-white shadow-md p-5 fixed md:static z-50 top-16 left-0 w-64 h-full min-h-screen overflow-y-auto transition-all`}
      >
        {" "}
        <span className="text-2xl md:text-3xl lg:text-2xl font-semibold flex my-4 ">
          Car<span className="text-sky-600">Care</span>
        </span>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded hover:bg-gray-100 ${
                    isActive ? "bg-gray-200 font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)} // Close on mobile nav click
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
