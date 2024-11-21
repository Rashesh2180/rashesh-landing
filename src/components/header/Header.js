import React, { useEffect, useState } from "react";
import { navlist } from "../../helpers/helpers";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  const hiddenRoute =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/forgotpassword")||
    location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/profile");

  if (hiddenRoute) {
    return null;
  }

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "border-b px-2 capitalize border-primary font-bold text-primary font-raleway"
      : "text-secondarys1 capitalize px-2 font-medium font-raleway";
  };

  return (
    <div className="max-w-[1710px] mx-auto lg:px-8 px-3 py-3 shadow-lg  bg-white z-[100000] sticky top-0 ">
      <div className="flex justify-between items-center gap-2">
        <div className="max-w-[200px] h-12">
          <img
            src="/assets/svg/logo/talentspinelogo.svg"
            alt="Logo"
            className="h-full w-full"
          />
        </div>

        <div className="flex items-center gap-2 max-lg:hidden">
          {navlist &&
            navlist.map((ele) => (
              <NavLink
                className={getLinkClass(ele.href)}
                to={ele.href}
                key={ele.href}
              >
                {ele.list}
              </NavLink>
            ))}
        </div>

        <div className="flex justify-between items-center xl:gap-6 gap-3 max-lg:hidden">
          <div className="flex items-center gap-1 py-3 px-4 rounded-full lg:max-w-[136px] border border-primary">
            <input
              type="text"
              placeholder="Search..."
              className="text-sm outline-none w-full text-black capitalize font-raleway"
            />
            <img
              src="/assets/svg/search/serach.svg"
              alt=""
              className="h-4 w-4"
            />
          </div>
          <div>
            <NavLink to="login" className="font-bold text-sm font-raleway">
              LOG IN
            </NavLink>
          </div>
          <button className="bg-primary rounded-md py-3 px-6 text-sm font-bold text-white uppercase font-raleway">
            <NavLink to="/signup">sign up</NavLink>
          </button>
        </div>

        <button className="lg:hidden" onClick={handleToggle}>
          {!toggle ? (
            <FaBars className="text-primary" />
          ) : (
            <IoMdClose className="text-red-600 text-2xl font-bold" />
          )}
        </button>

        {toggle && (
          <div className="gap-2 absolute h-screen top-[73px]  border-l border-t bg-white p-5 right-0 w-80 shadow-lg lg:hidden">
            <div className="flex items-center gap-1 py-3 px-4 rounded-full w-full border border-primary mb-5">
              <input
                type="text"
                placeholder="Search..."
                className="text-sm outline-none w-full text-black capitalize"
              />
              <img
                src="/assets/svg/search/serach.svg"
                alt=""
                className="h-4 w-4"
              />
            </div>
            <div className=" flex flex-col  gap-3">
              {navlist &&
                navlist.map((ele) => (
                  <NavLink
                    className={`${getLinkClass(ele.href)} py-3 text-xl`}
                    to={ele.href}
                    key={ele.href}
                  >
                    {ele.list}
                  </NavLink>
                ))}
            </div>
            <div className="mt-5 flex-col flex items-start gap-2">
              <div>
                <NavLink to="login" className="font-bold text-sm">
                  LOG IN
                </NavLink>
              </div>
              <button className="mt-5 bg-primary rounded-md py-3 px-6 text-sm font-bold text-white uppercase">
                sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
