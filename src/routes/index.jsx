
 import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/Register";
import HomeLayouts from "../layouts/HomeLayouts";
import ProfileLayout from "../layouts/ProfileLayout"

 

 
 export const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path:"/Register",
      element: <Register/>
    },
    {
      path:"/home",
      element: <HomeLayouts />
    },

    {
      path:"/profile",
      element: <ProfileLayout />
    }
    
  ]);