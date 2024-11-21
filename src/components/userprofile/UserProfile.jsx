import React from "react";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="profile-aligment bg-gradient-to-b from-[#0D58AC] to-white py-10">
      <div className=" p-6 bg-white rounded-2xl">
        <div className=" flex justify-between gap-5">
          <div className="flex gap-7">
            <div className=" h-36 w-36 rounded-full  object-cover object-top  relative">
              <img
                src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className=" h-full w-full rounded-full  object-cover object-top brightness-50 "
                alt=""
              />
              <img
                src="/assets/svg/profile/bluetik.svg"
                alt=""
                className=" h-6 w-6 absolute bottom-1 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div>
              <h1 className=" font-inter text-3xl font-bold">
                Ranjani And Vignesh
              </h1>
              <p className="form-small  mt-1">
                Analytics, Product, Strategy, Consulting
              </p>
              <div className=" flex items-center gap-4">
                <div className=" p-1 bg-skygreen border-l-2 max-w-20 flex mt-5 flex-col justify-center items-center w-full border-success rounded-xl">
                  <h1 className="form-small">Top</h1>
                  <h2 className=" text-xl font-inter font-bold mt-2">1%</h2>
                </div>
                <div className=" p-1 bg-skygreen border-l-2 max-w-20 flex mt-5 flex-col justify-center items-center w-full border-success rounded-xl">
                  <h1 className="form-small">Bookings</h1>
                  <h2 className=" text-xl font-inter font-bold mt-2">196</h2>
                </div>
                <div className="hexa-bg mt-auto flex justify-center items-center   flex-col">
                  <h2 className=" text-xs font-black font-inter">Top</h2>
                  <h3 className=" text-xs font-black font-inter">RATED</h3>
                  <div className=" text-[8px] font-inter mt-1">2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="bg-success px-6  py-2 rounded-full text-sm  font-inter text-white">
            Start Page
            </button>
            <button className="bg-[#0D58AC] px-6  mt-3 py-2 rounded-full text-sm  font-inter text-white">
            My Portfolio
            </button>
            <div className=" mt-auto flex justify-between">
                <NavLink><img src="/assets/svg/socialmedia/greenfb.svg" alt="" className=" h-6 w-6" /></NavLink>
                <NavLink><img src="/assets/svg/socialmedia/greeninsta.svg" alt="" className=" h-6 w-6" /></NavLink>
                <NavLink><img src="/assets/svg/socialmedia/greentwit.svg" alt="" className=" h-6 w-6" /></NavLink>
                <NavLink><img src="/assets/svg/socialmedia/greenlinkidien.svg" alt="" className=" h-6 w-6" /></NavLink>



            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
