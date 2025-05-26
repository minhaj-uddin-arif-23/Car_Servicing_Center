// DashboardLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Hammer,
  UserCircle,
  Wrench,
  ClipboardList,
  UserPlus,
} from "lucide-react";
import { useContext } from "react";
import { AuthProvider as AuthContext } from "../authContext/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const role = user?.role || "admin"; // You can determine role from context or backend

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
            path: "/dashboard/manage-services",
            label: "Manage Services",
            icon: <Wrench className="w-4 h-4 inline mr-2" />,
          },
          {
            path: "/dashboard/all-users",
            label: "See All Users",
            icon: <UserPlus className="w-4 h-4 inline mr-2" />,
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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
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
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden p-3 bg-white border-b shadow-sm w-full">
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => window.location.assign(e.target.value)}
          defaultValue="/dashboard"
        >
          {navItems.map((item) => (
            <option key={item.path} value={item.path}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}