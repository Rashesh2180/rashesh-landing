import React from "react";

const Keys = () => {
  return (
    <div className=" lg:pt-[150px] lg:pb-20 py-10 max-w-[1600px] mx-auto xl:px-28 lg:px-10 px-5 relative">
      <h1 className=" section-title  text-center ">
        We Focus on
        <span className="text-primary "> Key Categories</span>
      </h1>
      <div className=" flex justify-center items-center gap-5 lg:mt-14 mt-8">
        <button className=" bg-primary shadow-lg text-white px-5 py-3  text-base font-roboto rounded-2xl font-bold">
          Market Place
        </button>
        <button className=" bg-transparent shadow-lg text-black border border-black text-base px-5 py-3 font-roboto rounded-2xl font-bold">
          Startup HUb
        </button>
      </div>
      <div className=" lg:mt-14 mt-8 flex gap-6 lg:justify-center items-center lg:flex-wrap overflow-x-auto pb-8">
        {[
          "PHP",
          "UI/UX Design",
          "My SQL",
          "DevOps",
          "React JS",
          "ElenaSkill",
          "Dot Net",
          "Graphic Designing",
          "Mental health ",
          "Tech",
          "Study Aboard",
          "Career",
          "Coding",
        ].map((ele) => (
          <div
            className=" font-roboto text-base py-3 px-10 shrink-0 rounded-full text-center "
            style={{ boxShadow: "0 10px 25px rgba(215, 234, 254,0.8)" }}
          >
            {ele}
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center ">
        <button className=" px-7 py-3 text-primary text-base border-b border-primary rounded-2xl shadow-xl  font-roboto font-bold">
          View More
        </button>
      </div>
      <img
        src="/assets/svg/work/upside.svg"
        alt=""
        className=" h-20 w-[180px] absolute top-20 max-lg:hidden left-20 transform "
      />
      <img
        src="/assets/svg/work/plane.svg"
        alt=""
        className=" h-[160px] w-[200px]  absolute top-14 max-lg:hidden right-20 transform "
      />

      {/* bussiness start */}
      <div className=" sm:pt-24 pt-10">
        <h1 className=" section-title  leading-[50px] text-center max-w-[1050px] mx-auto ">
          We’ve helped millions of owners create a business that works.
        </h1>
        <p className=" mt-6 font-roboto text-base text-secondarys1 text-center">
          Hundreds of companies trust us with their success. It’s time for you
          to experience quality mentoring for your business.
        </p>
        <div className=" mt-8 py-4 flex justify-around items-center flex-wrap gap-5">
          {[
            "/assets/svg/socialmedia/Link → b1.png.svg",
            "/assets/svg/socialmedia/Link → b2.png.svg",
            "/assets/svg/socialmedia/Link → b3.png.svg",
            "/assets/svg/socialmedia/Link → b4.png.svg",
            "/assets/svg/socialmedia/Link → b5.png.svg",
            "/assets/svg/socialmedia/Link → b6.png.svg",



          ].map(ele=>(
            <img src={ele} alt="" className=" object-cover"/>
          ))}
        </div>
      </div>
      {/* bussiness end */}
    </div>
  );
};

export default Keys;
