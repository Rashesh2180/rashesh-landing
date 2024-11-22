import React from "react";
import { FaStar } from "react-icons/fa6";

const data = [
  {
    id: 1,
    review:
      "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
    reviewer: "Tom Williams",
    post: "Software Developer",
  },
  {
    id: 2,
    review:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
    reviewer: "Jane Smith",
    post: "Freelance Designer",
  },
  {
    id: 3,
    review:
      "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
    reviewer: "Michael Brown",
    post: "Online Entrepreneur",
  },
  {
    id: 4,
    review:
      "“I was a little hesitant to switch to a new web hosting company, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installation for popular apps. Everything has been smooth sailing since I made the switch.”",
    reviewer: "Sarah Johnson",
    post: "Blogger",
  },
];
const Review = () => {
  return (
    <div className=" py-10  profile-aligment ">
      <div className="">
        {data.length > 0 ? (
          <div className=" flex gap-8 overflow-x-auto p-3">
            {data.map((ele) => (
              <div className=" max-w-[360px]  hover:border-t-4 hover:shadow-2xl hover:border-x-0 hover:border-b-0 shrink-0 p-5 rounded-2xl flex flex-col justify-start border border-[#0D58AC] font-inter">
                <p className="  text-sm text-center leading-7 w-[95%] mx-auto ">
                  {ele.review}
                </p>
                <div className=" flex items-center gap-1 mx-auto mt-3 ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar className=" text-xs  text-[#FBD300]" />
                  ))}
                </div>
                <div className=" mt-auto pt-3">
                    <h1 className=" text-center text-base font-semibold">{ele.reviewer}</h1>
                    <h1 className=" text-center  form-small">{ele.post}</h1>


                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className=" py-10 text-red-600 font-semibold text-center">
            data Not found
          </p>
        )}
      </div>
    </div>
  );
};

export default Review;
