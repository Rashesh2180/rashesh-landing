import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className=" h-screen bg-[#f1f9f2] lg:px-10 px-5 py-5 relative">
      <img
        src="/assets/svg/login/PATHMOVER LOGO.svg"
        alt=""
        className=" h-16 w-[250px] object-contain"
      />
      <div className=" flex justify-center items-center flex-col sm:mt-4 mt-10">
        <div className=" max-w-[700px] mx-auto w-full z-50 bg-white p-6  border-t-2 border-success rounded-[30px] shadow-xl">
          <div className=" flex justify-start items-center  bg-success max-w-[280px] rounded-[75px] mx-auto">
            <button className=" py-3 text-lg font-bold rounded-[75px] px-10 text-white font-roboto bg-[#0D58AC]">
              Login
            </button>
            <button className=" py-3 text-lg font-bold rounded-r-[75px] px-10 text-white font-roboto  bg-transparent">
              Sign-up
            </button>
          </div>
          <form action="" className=" mt-7">
            <label
              htmlFor=""
              className=" text-secondarys1 font-inter block text-base font-bold"
            >
              Email
            </label>
            <input
              type="email"
              className=" mt-2 border border-bordercolor rounded-xl w-full py-3 xl-2:py-5 outline-none text-secondary px-4"
              placeholder="Enter your Email ID"
            />
            <label
              htmlFor=""
              className=" text-secondarys1 font-inter block mt-3 text-base font-bold"
            >
              Password
            </label>
            <input
              type="password"
              className=" mt-2 border border-bordercolor rounded-xl w-full py-3 outline-none xl-2:py-5 text-secondary px-4"
              placeholder="Enter password"
            />
            <div className=" mt-4 flex gap-4 items-center">
              <input
                type="checkbox"
                className=" accent-success text-white h-5 w-5"
              />
              <p className=" text-sm font-inter text-secondarys1">
                By hitting the Register button, you agree to the
                <span className=" text-success font-bold underline">
                  <NavLink>
                    {" "}
                    Terms conditions{" "}
                    <span className=" text-secondarys1">%</span> Privacy Policy
                  </NavLink>
                </span>
              </p>
            </div>
            <button className=" w-full bg-success text-white mt-5 p-3 rounded-lg text-base xl-2:p-4 xl-2:text-xl font-inter font-bold">
              Login
            </button>
            <NavLink className=" ml-auto flex justify-end mt-3 font-inter font-bold text-success underline">
              Forgot Password?
            </NavLink>
            <div className=" mt-5 flex justify-between items-center gap-7">
              <div className=" h-[1px] bg-bordercolor w-full"></div>
              <p className=" text-lg font-inter">Or</p>
              <div className=" h-[1px] bg-bordercolor w-full"></div>
            </div>
            <div className=" flex justify-between items-center mt-4 flex-wrap gap-3">
              <button className=" p-4 border-2 border-bordercolor rounded-xl max-sm:w-full justify-center flex gap-3 items-center">
                <img
                  src="/assets/svg/login/Vector (5).svg"
                  alt=""
                  className=" h-[22px] w-[22px]"
                />
                <p className=" text-secondarys1 font-inter font-bold text-xs">
                  Continue with Google
                </p>
              </button>
              <button className=" p-4 border-2 border-bordercolor max-sm:w-full justify-center rounded-xl flex gap-3 items-center">
                <img
                  src="/assets/svg/login/image 14.svg"
                  alt=""
                  className=" h-[22px] w-[22px]"
                />
                <p className=" text-secondarys1 font-inter  font-bold text-xs">
                  Continue with Google
                </p>
              </button>{" "}
              <button className=" p-4  bg-primary rounded-xl flex gap-3 max-sm:w-full justify-center items-center">
                <img
                  src="/assets/svg/login/path14.svg"
                  alt=""
                  className=" h-[22px] w-[22px]"
                />
                <p className=" text-white font-inter font-bold text-xs">
                  Continue with Google
                </p>
              </button>
            </div>
            <div className=" mt-6 text-center font-inter  text-secondarys1 text-base">
              Don’t have an account? <NavLink className=" text-success underline">Sign-up</NavLink>
            </div>
          </form>
        </div>
      </div>
      <img
        src="/assets/images/login/Shapes.png"
        alt=""
        className=" h-[60vh] w-[40%] absolute right-0 top-0  object-cover object-top"
      />
    </div>
  );
};

export default Login;
