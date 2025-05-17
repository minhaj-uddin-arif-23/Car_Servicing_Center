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
    path:'/signin',
    element:<Login />
  },
    {
    path:'/signup',
    element:<Register />
  },
  
]);

export default routers;
