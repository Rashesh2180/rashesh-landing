import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import ResponsiveSidebar from "../sidebar/ResponsiveSidebar";
import { IoMdClose } from "react-icons/io";

const DashBoardHeader = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; // Restore body scroll when sidebar is closed
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="bg-[#EFF6F3] xl:px-7 py-4 p-4 z-50 rounded-bl-2xl sticky left-0 top-0 w-full">
      <div className="flex justify-between items-center gap-2">
        <h1 className="font-inter sm:text-2xl text-sm font-bold">My Profile</h1>
        <NavLink to="/dashboard" className="lg:hidden">
          <img
            src="/assets/svg/login/PATHMOVER LOGO.svg"
            alt=""
            className="h-12 max-w-24 mx-auto object-contain"
          />
        </NavLink>

        <div className="flex items-center gap-3 ">
          <button className="p-2 max-lg:hidden bg-success py-3 xl:px-7 px-4 shadow-xl font-bold font-inter xl:text-sm text-xs rounded-2xl text-white">
            Visit Candidate dashboard
          </button>
          <button className="flex max-lg:hidden items-center gap-[10px] border bg-white shadow-xl border-success rounded-2xl py-3 px-3">
            <img src="/assets/svg/dashboardheader/earth.svg" alt="" />
            <div className="text-success text-sm font-bold font-inter border-l border-success pl-[10px]">
              Online
            </div>
            <div className="bg-success h-2 w-2 rounded-full "></div>
          </button>
          <button className="flex items-center gap-[10px] border max-lg:hidden bg-white shadow-2xl border-success rounded-2xl py-3 px-4">
            <div className="text-black text-sm font-inter">How it works</div>
            <div className="bg-[#EFF6F3] p-1 rounded-xl">
              <img src="/assets/svg/dashboardheader/youtube.svg" alt="" />
            </div>
          </button>
          <button className="border-success sm:rounded-2xl rounded-full border sm:py-3 py-2 sm:px-5 px-2 bg-white shadow-xl">
            <img src="/assets/svg/dashboardheader/info (2).svg" alt="" className=" max-sm:h-3 max-sm:w-3" />
          </button>
          <button className="border-success sm:rounded-2xl rounded-full border sm:py-3 py-2 sm:px-5 px-2 bg-white shadow-xl">
            <img src="/assets/svg/dashboardheader/bell (2).svg" alt="" className=" max-sm:h-3 max-sm:w-3" />
          </button>
          <button className="lg:hidden" onClick={handleToggle}>
         { open ? <IoMdClose  className=" text-red-600 text-xl" /> : <FaBars /> } 
        </button>
        </div>

       

       

        {open && (
          <>
         
            <div className="absolute top-20 right-0 z-50">
              <ResponsiveSidebar />
            </div>
            
          </>
        )}
      </div>
    </header>
  );
};

export default DashBoardHeader;
