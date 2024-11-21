import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import ResponsiveSidebar from "../sidebar/ResponsiveSidebar";
const DashBoardHeader = () => {
  const [open, setClose] = useState(false);

  const handleToggle = () => {
    setClose((prev) => !prev);
  };
  return (
    <div className=" bg-[#EFF6F3] xl:px-7 py-4 p-4 z-50 rounded-bl-2xl sticky top-0 w-full ">
      <div className=" flex justify-between items-center gap-2 ">
        <h1 className=" font-inter sm:text-2xl text-lg font-bold">
          My Profile
        </h1>
        <div className=" flex items-center gap-3 max-lg:hidden">
          <button
            className=" p-2 bg-success to py-3 xl:px-7 px-4 shadow-xl
        
        font-bold font-inter  xl:text-sm text-xs rounded-2xl text-white on green col-start-auto"
          >
            Visit Candidate dashboard
          </button>
          <button className=" flex items-center gap-[10px] border bg-white shadow-xl border-success rounded-2xl py-3 px-3">
            <img src="/assets/svg/dashboardheader/earth.svg" alt="" />
            <div className=" text-success text-sm font-bold font-inter border-l border-success pl-[10px]">
              Online
            </div>
            <div className=" bg-success h-2 w-2 rounded-full "></div>
          </button>
          <button className=" flex items-center gap-[10px] border bg-white shadow-2xl border-success rounded-2xl py-3 px-4">
            <div className=" text-black text-sm  font-inter ">How it works</div>
            <div className=" bg-[#EFF6F3] p-1 rounded-xl">
              <img src="/assets/svg/dashboardheader/youtube.svg" alt="" />
            </div>
          </button>
          <button className=" border-success rounded-2xl border py-3 px-5 bg-white shadow-xl">
            <img src="/assets/svg/dashboardheader/info (2).svg" alt="" />
          </button>
          <button className=" border-success rounded-2xl border py-3 px-4 bg-white shadow-xl">
            <img src="/assets/svg/dashboardheader/bell (2).svg" alt="" />
          </button>
        </div>
        <NavLink to="/dashboard" className=" lg:hidden">
          <img
            src="/assets/svg/login/PATHMOVER LOGO.svg"
            alt=""
            className=" h-8 max-w-28 mx-auto  object-contain"
          />
        </NavLink>
        <button className=" lg:hidden" onClick={handleToggle}>
          <FaBars />
        </button>
        {open && 
        
        <div className=" absolute top-16 right-0">
          <ResponsiveSidebar/>
          </div>}
      </div>
    </div>
  );
};

export default DashBoardHeader;
