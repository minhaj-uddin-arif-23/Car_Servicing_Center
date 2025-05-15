import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../home/Home";
import About from "../page/About";

const routers = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
    
    ]
  }
])



export default routers