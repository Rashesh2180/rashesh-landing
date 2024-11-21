import React from "react";
import { FaBars } from "react-icons/fa";
const DashBoardHeader = () => {
  return (
    <div className=" bg-[#EFF6F3] xl:px-7 py-4 p-4 z-50 rounded-bl-2xl sticky top-0 w-full">
      <div className=" flex justify-between items-center gap-2">
        <h1 className=" font-inter text-2xl font-bold">My Profile</h1>
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
        <button className=" lg:hidden">
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default DashBoardHeader;
