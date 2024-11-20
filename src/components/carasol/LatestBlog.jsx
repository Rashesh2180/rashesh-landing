import React from "react";

const data = [
  {
    id: 1,
    date: "27 APR, 2023",
    title: "Print, publishing qui visual layout mockups.",
    img: "/assets/images/blogs/Section → Article → Figure → Link → image.png",
  },
  {
    id: 2,
    date: "27 APR, 2023",
    title: "Designer’s checklist for every UX/UI project.",
    img: "/assets/images/blogs/Section → Article → Figure → Link → image (1).png",
  },
  {
    id: 3,
    date: "27 APR, 2023",
    title: "Make more productive work flow in few steps.",
    img: "/assets/images/blogs/Section → Article → Figure → Link → image (2).png",
  },
];
const LatestBlog = () => {
  return (
    <div className="max-w-[1500px] mx-auto sm:py-20 py-10 xl:px-16 lg:px-10 px-5">
      <h1 className=" section-title  text-center ">
        Latest
        <span className="text-primary "> Blogs</span>
      </h1>
      <div className=" flex sm:gap-8 gap-4 items-center justify-start mt-14">
        <button className=" h-10 w-10 rounded-full border shrink-0 border-primary flex justify-center items-center">
          <img src="/assets/svg/carasol/left.svg" alt="" />
        </button>
        {data.length > 0 ? (
          <div className=" flex  gap-5 overflow-x-auto mx-auto p-4 ">
            {data.map((ele) => (
              <div key={ele.id} className=" shrink-0 max-w-[350px] p-5 hover:shadow-xl  hover:rounded-[24px] hover:border-t border-t-primary ">
                <img
                  src={ele.img}
                  alt=""
                  className=" h-[250px] object-contain w-full"
                />
                <h3 className=" text-xs text-secondarys1 font-roboto">
                  {" "}
                  {ele.date}
                </h3>
                <h5 className=" mt-2 font-roboto text-lg font-medium">
                  {ele.title}
                </h5>
                <button className=" mt-5 capitalize text-primary border text-xs border-primary  rounded-lg px-4 py-2 font-medium font-roboto">
                  read more
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className=" capitalize text-red-600 font-semibold text-xl text-center">
            No data Found
          </p>
        )}
          <button className=" h-10 w-10 rounded-full border shrink-0 border-primary flex justify-center items-center">
          <img src="/assets/svg/carasol/right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
