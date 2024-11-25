import React from "react";

const HowWork = () => {
  return (
    <div className=" max-w-[1440px] mx-auto py-20  relative xl:px-28 lg:px-10 px-5">
      <div className=" flex justify-center items-center gap-5">
        <button className=" bg-primary shadow-lg text-white px-5 py-3  text-base font-roboto rounded-2xl font-bold">
          How it Works
        </button>
        <button className=" bg-transparent shadow-lg text-black border border-black text-base px-5 py-3 font-roboto rounded-2xl font-bold">
          Domain Expertise
        </button>
      </div>
      <div className=" mt-10 flex justify-center items-center gap-10 mx-auto">
        <div className=" h-[1px] bg-primary max-w-[250px] w-full"></div>
        <h2 className=" section-title">
          <span className=" text-primary">How it</span> Works
        </h2>
        <div className=" h-[1px] bg-primary max-w-[250px] w-full"></div>
      </div>
      <p className=" max-w-[1048px] mx-auto mt-10 text-center text-bordercolor text-base font-roboto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <div className=" mt-10 w-full border border-primary rounded-[60px] p-5 shadow-xl ">
        <div
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #4c6bc5 10%, #00bcd4 40%, #7f00ff 100%)",
          }}
          className=" overflow-hidden  flex-wrap max-sm:justify-center relative  rounded-[40px]  w-full flex justify-between items-center"
        >
          <div className=" hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-full">
            <div className=" py-10 max-w-[280px] px-10">
              <h1 className=" font-bold font-roboto text-lg  text-white">
                Sign Up and Complete Your Profile
              </h1>
              <p className="   text-sm  font-roboto text-white  mt-2">
                Begin by signing up on TalentSpine. Fill out your profile with
                essential information, including your skills, experience, and
                expertise. This helps us match you with the most suitable
                opportunities.
              </p>
            </div>
          </div>
          <div className=" hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10">
            <div className=" py-10 max-w-[280px] px-10">
              <h1 className=" font-bold font-roboto text-lg  text-white">
                Explore Job Opportunities
              </h1>
              <p className="   text-sm  font-roboto text-white  mt-2">
                Browse through a wide range of job listings from top companies
                looking for skilled professionals. Filter roles based on your
                expertise, experience level, and preferred location.
              </p>
            </div>
          </div>
          <div className=" hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10">
            <div className=" py-10 max-w-[280px] px-10">
              <h1 className=" font-bold font-roboto text-lg  text-white">
                Get Shortlisted and Interview
              </h1>
              <p className="   text-sm  font-roboto text-white  mt-2">
                If your application stands out, you’ll be shortlisted for an
                interview. TalentSpine’s platform makes it easy to schedule and
                conduct interviews, ensuring a smooth process for both you and
                the employer.
              </p>
            </div>
          </div>
          <div className=" hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10">
            <div className=" py-10 max-w-[280px] px-10">
              <h1 className=" font-bold font-roboto text-lg  text-white">
                Continuous Support
              </h1>
              <p className="   text-sm  font-roboto text-white  mt-2">
                TalentSpine offers ongoing support, from job placement to career
                growth. Access resources, training, and advice to help you
                succeed in your new role.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/svg/work/arrow.svg"
        alt=""
        className=" w-[150px] h-[87px] absolute top-24 left-2 max-md:hidden"
      />
      <img
        src="/assets/svg/work/plane.svg"
        alt=""
        className=" w-[180px] h-[150px] absolute top-0 right-10 max-md:hidden"
      />
    </div>
  );
};

export default HowWork;
