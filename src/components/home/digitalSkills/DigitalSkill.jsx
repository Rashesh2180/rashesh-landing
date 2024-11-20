import React from "react";
const data = [
  {
    id: 1,
    name: "angular",
    logo: "/assets/svg/socialmedia/Angular.svg fill.svg",
  },
  { id: 2, name: "React", logo: "/assets/svg/socialmedia/React.svg fill.svg" },
  {
    id: 3,
    name: "Html",
    logo: "/assets/svg/socialmedia/Figure → HTML5.svg.svg",
  },
  { id: 4, name: "vue", logo: "/assets/svg/socialmedia/Vue.svg fill.svg" },
  { id: 5, name: "mearn", logo: "/assets/svg/socialmedia/Mern.svg fill.svg" },

];

const DigitalSkill = () => {
  return (
    <div className="bg-[#EFEFEF] ">
      <div className=" sm:py-24 py-5  px-5 max-w-[1440px] mx-auto xl:px-28 lg:px-10 ">
        <h1 className=" section-title max-w-[1067px] mx-auto leading-[50px]">
          Discover
          <span className="text-primary ">Packages</span>
          <span>with expert proficiency across </span>
          <span className=" text-primary">100 tech & digital skills</span>
        </h1>
        <div className=" flex justify-center items-center gap-5 mt-10">
          <button className=" bg-primary shadow-lg text-white px-5 py-3  text-base font-roboto rounded-2xl font-bold">
            Software Experties
          </button>
          <button className=" bg-transparent shadow-lg text-black border border-black text-base px-5 py-3 font-roboto rounded-2xl font-bold">
            Skill Experties
          </button>
        </div>
        <div className=" w-full flex mt-12 max-lg:flex-col max-lg:gap-5">
          <div className=" rounded-2xl shrink-0 lg:p-8 p-5 shadow-2xl border-r border-l-primary border-r-bordercolor border-b-bordercolor border-b border-l-2">
            <ul className=" max-lg:flex gap-5 overflow-x-auto">
              {[
                "Front-End Developers",
                "Back-End Developers",
                "Software Engineers",
                "App Developers",
                "DevOps Engineer",
                "Principal Software Engineer",
                "Staff Software Engineer",
                "Machine Learning Engineer",
                "Data Science Engineer",
                "Engineer Manager",
              ].map((ele) => (
                <li className=" shrink-0 pb-3 font-roboto text-black text-base border-b border-[#DDDDDD] lg:mb-3">
                  <button>{ele}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:px-10 w-full">
            <div className="flex  justify-start gap-5 w-full flex-wrap max-sm:justify-center">
              {data.length > 0 &&
                data.map((ele) => (
                  <div key={ele.id} className=" bg-white shadow-xl p-5 max-w-[150px] rounded-[15px] h-[100px] flex flex-col justify-center items-center w-full">
                    <img src={ele.logo} className=" w-8 h-8" alt="" />
                    <h2 className=" font-roboto  text-sm font-medium capitalize">{ele.name}</h2>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSkill;
