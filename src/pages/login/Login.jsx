import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa"; // Import the eye icons

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="h-screen  bg-[#f1f9f2] overflow-y-auto flex flex-col justify-between relative">
      <img
        src="/assets/svg/login/PATHMOVER LOGO.svg"
        alt=""
        className="h-16 w-[250px] object-contain absolute top-5 left-5 z-[1000]"
      />
      
      <div className="flex flex-col  flex-grow justify-center px-5 py-5 mt-[10vh]"> 
        <div className="max-w-[600px] mx-auto w-full z-50 bg-white sm:p-6 p-4 border-t-2 border-success rounded-[30px] shadow-xl">
          <div className="flex justify-start items-center bg-success max-w-[250px] rounded-[75px] mx-auto">
            <button className="py-2 text-base font-bold rounded-[75px] px-10 text-white font-roboto bg-[#0D58AC]">
              <NavLink  to="/login">Login</NavLink>
            </button>
            <button className="py-2 text-sm font-bold rounded-r-[75px] px-10 text-white font-roboto bg-transparent">
              <NavLink to="/signup">Sign-up</NavLink>
            </button>
          </div>
          <form action="" className="mt-5">
            <label
              htmlFor="email"
              className="text-secondarys1 font-inter block text-base font-bold max-sm:text-sm "
            >
              Email
            </label>
            <input
              type="email"
              className="mt-2 border border-bordercolor rounded-lg w-full sm:py-2 py-2 xl-2:py-5 outline-none text-secondary px-4"
              placeholder="Enter your Email ID"
              id="email"
            />
            <label
              htmlFor="password"
              className="text-secondarys1 font-inter block mt-3 text-base font-bold max-sm:text-sm "
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} 
                className="mt-2 border border-bordercolor rounded-lg w-full outline-none sm:py-2 py-2 xl-2:py-5 text-secondary px-4"
                placeholder="Enter password"
                id="password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-[58%] transform -translate-y-1/2 text-secondarys1"
              >
                {!showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
            <div className="mt-4 flex gap-4 items-center">
              <input type="checkbox" className="accent-success text-white h-5 w-5" />
              <p className="text-xs font-inter text-secondarys1 max-sm:text-xs">
                By hitting the Register button, you agree to the
                <span className="text-success font-bold underline">
                  <NavLink> Terms conditions </NavLink> & Privacy Policy
                </span>
              </p>
            </div>
            <button className="w-full bg-success text-white mt-5 sm:p-3 p-2 rounded-lg text-sm sm:text-sm xl-2:p-4 xl-2:text-xl font-inter font-bold">
              <NavLink to="/dashboard">Login</NavLink>
            </button>
            <NavLink to="/forgotpassword" className="ml-auto flex justify-end mt-3 font-inter text-sm font-bold text-success underline">
              Forgot Password?
            </NavLink>
            <div className="mt-4 flex justify-between items-center gap-7">
              <div className="h-[1px] bg-bordercolor w-full"></div>
              <p className="text-lg font-inter">Or</p>
              <div className="h-[1px] bg-bordercolor w-full"></div>
            </div>
            <div className="flex justify-between items-center sm:mt-4 mt-3 max-sm:flex-col  gap-3">
              <button className="sm:p-3 p-3 border-2 flex-1 border-bordercolor rounded-xl max-sm:w-full justify-start gap-2 flex  items-center">
                <img
                  src="/assets/svg/login/Vector (5).svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-secondarys1 font-inter font-bold  text-[10px]">
                  Continue with Google
                </p>
              </button>
              <button className="sm:p-3 p-3 border-2 flex-1 border-bordercolor rounded-xl max-sm:w-full justify-start gap-2 flex  items-center">

                <img
                  src="/assets/svg/login/image 14.svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-secondarys1 font-inter font-bold  text-[10px]">
                Continue with LinkedIn
                </p>
              </button>
              <button className="sm:p-3 p-3 border-2 flex-1 bg-primary rounded-xl max-sm:w-full justify-start gap-2 flex  items-center">

                <img
                  src="/assets/svg/login/path14.svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                    <p className="text-white font-inter font-bold  text-[10px]">
                Continue with Facebook
                </p>
              </button>
            </div>
            <div className="sm:mt-6 mt-4 text-center font-inter text-secondarys1 text-sm">
              Don’t have an account?{" "}
              <NavLink to="/signup" className="text-success underline font-semibold">Sign-up</NavLink>
            </div>
          </form>
        </div>
      </div>
      
      <img
        src="/assets/images/login/Shapes.png"
        alt=""
        className="h-[70vh] w-[40%] absolute right-0 top-0 object-cover object-top"
      />
    </div>
  );
};

export default Login;
