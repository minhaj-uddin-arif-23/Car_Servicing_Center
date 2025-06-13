import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../page/home/Home";
import About from "../page/About";
import Service from "../page/Service";
import UpcomingService from "../page/UpcomingService";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import Login from "../auth/Login";
import Register from "../auth/Register";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Admin_profile from "../Dashboard/Admin/Admin_profile";
import AddCarService from "../Dashboard/Admin/AddCarService";
import ManageService from "../Dashboard/Admin/ManageService";
import AllUser from "../Dashboard/Admin/AllUser";
import DetailsCarService from "../components/service/DetailsCarService";
import Payment from "../components/payment/Payment";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/upcomingservice",
        element: <UpcomingService />,
      },
      {
        path: "/details/:id",
        element: <DetailsCarService />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_KEY_LOCALHOST}/details/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin-profile",
        element: <Admin_profile />,
      },
      {
        path: "/dashboard/add-service",
        element: <AddCarService />,
      },
      {
        path: "/dashboard/manage-service",
        element: <ManageService />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUser />,
      },
    ],
  },
]);

export default routers;
