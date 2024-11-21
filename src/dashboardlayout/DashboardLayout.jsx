import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import DashBoardHeader from "../components/dahboardheader/DashBoardHeader";
import Sidebar from "../components/sidebar/Sidebar";
const DashboardLayout = () => {
  
 


  return (
    <div className="flex h-screen">
      <Sidebar/>
     

      <main className="flex-1 lg:ml-56 lg:p-1">
        <DashBoardHeader/>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
