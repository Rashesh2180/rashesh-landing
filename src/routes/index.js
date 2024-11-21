// src/router/index.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import NewCredentials from "../pages/forgotpassword/NewCredentials";
import DashboardLayout from "../dashboardlayout/DashboardLayout.jsx";
import Profile from "../pages/profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
        children: [
          {
            path: "newcredentials",
            element: <NewCredentials />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          }
          
        ],
      },
    ],
  },
]);

export default router;
