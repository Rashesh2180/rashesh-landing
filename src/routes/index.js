import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import NewCredentials from "../pages/forgotpassword/NewCredentials";
import DashboardLayout from "../dashboardlayout/DashboardLayout.jsx";
import Dashboadprofile from "../pages/dahboardprofile/Profile.jsx";
import Profile from "../pages/profile/Profile.jsx";

import Booking from "../pages/booking/Booking.jsx";
import PriorityDm from "../pages/priority/PriorityDm.jsx";
import Testimonials from "../pages/testimonials/Testimonials.jsx";
import Post from "../pages/post/Post.jsx";
import Communicate from "../pages/communicate/Communicate.jsx";
import Calender from "../pages/calender/Calender.jsx";
import Service from "../pages/service/Service.jsx";
import Payments from "../pages/payments/Payments.jsx";
import SalesReport from "../pages/salesreport/SalesReport.jsx";
import TaxInfromation from "../pages/taxinformation/TaxInfromation.jsx";
import Auth from "../pages/auth/Auth.jsx";

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
        path: "auth",
        element: <Auth />,
      },
    
      {
        path: "profile",
        element: <Profile />,
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
            element: <Dashboadprofile />,
          },
          {
            path: "booking",
            element: <Booking />,
          },
          {
            path: "prioritydm",
            element: <PriorityDm />,
          },
          {
            path: "testimonials",
            element: <Testimonials />,
          },
          {
            path: "posts",
            element: <Post />,
          },
          {
            path: "communicate",
            element: <Communicate />,
          },
          {
            path: "calendar",
            element: <Calender />,
          },
          {
            path: "services",
            element: <Service />,
          },
          {
            path: "payments",
            element: <Payments />,
          },
          {
            path: "salesreport",
            element: <SalesReport />,
          },
          {
            path: "taxinformation",
            element: <TaxInfromation />,
          },
        ],
      },
    ],
  },
]);

export default router;
