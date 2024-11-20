import React, { useState } from "react";
import Categories from "../categories/Categories";

const data = [
  {
    id: 1,
    name: "Startup",
    post: "What can a Business Coach Help With?",
    adress: "2 Day Delivery",
    priceper_hour: "40",
    review: "4.8(782)",
    priceper_month: "1200",
    reviwemen:
    "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trending1.png",
    reviewer: "James",
    review_text: "top rated",
  },
  {
    id: 2,
    name: "Tips",
    post: "Build the right team working the right way",
    adress: "2 Day Delivery",
    priceper_hour: "60",
    priceper_month: "1200",
    review: "4.8(782)",
    reviwemen:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trenidng2.png",
    reviewer: "James",
    review_text: "top rated",
  },
  {
    id: 3,
    name: "Coaching",
    post: "Is A Small Business Coach Different?",
    adress: "2 Day Delivery",
    priceper_hour: "60",
    priceper_month: "1200",
    reviwemen:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
      img: "/assets/images/trending/trenidng3.png",
    reviewer: "James",
    review_text: "top rated",
  },
  {
    id: 4,
    name: "Tips",
    post: "Build the right team working the right way",
    adress: "2 Day Delivery",
    priceper_hour: "60",
    priceper_month: "1200",
    reviwemen:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
      img: "/assets/images/trending/trending4.png",
    reviewer: "James",
    review_text: "top rated",
  },
];

const TrendingPackage = () => {
  const categories = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Web Development",
    "Data Science",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < data.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="max-w-[1500px] mx-auto sm:py-24 py-5 xl:px-16 lg:px-10 px-5 relative">
      <h1 className=" section-title max-w-[439px] mx-auto !text-wrap  flex max-sm:flex-col">
        Trending 
       <div>
       <span className="text-primary "> Packages</span>
        <img
          src="/assets/svg/curve/text-curve.svg"
          alt=""
          className="max-sm:mx-auto ml-auto mt-[10px]  max-w-[220px] w-full"
        />
       </div>
      </h1>
      <div className="mt-10 md:px-[95px]">
        <Categories categories={categories} />
      </div>

      <div className="mt-10 w-full flex justify-start sm:gap-7 gap-2 items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="h-10 w-10 border border-primary rounded-full shrink-0 flex items-center justify-center disabled:opacity-50"
        >
          <img
            src="/assets/svg/carasol/left.svg"
            alt=""
            className="h-4 w-4"
          />
        </button>

        {data.length > 0 ? (
          <div className=" flex  w-full justify-start mx-auto overflow-x-auto  gap-5 p-5">
            {data
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((ele) => (
                <div
                  key={ele.id}
                  className="xl-2:max-w-[338.5px] max-w-[280px] shrink-0 w-full p-4 rounded-2xl border shadow-sm border-bordercolor overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-90"
                >
                  <div className="h-[200px] relative">
                    <img
                      src={ele.img}
                      alt=""
                      className="h-full w-full  object-top rounded-2xl"
                    />
                  </div>

                  <div className="">
                    <div className=" mt-4"></div>
                    <div className="flex gap-1 items-center justify-between">
                      <h1 className="xl-2:text-2xl text-lg font-bold font-roboto text-primary uppercase tracking-wider">
                        {ele.name}
                      </h1>
                      <div className="border border-primary text-primary px-2 py-1 rounded-[6px] font-roboto xl-2:text-sm text-xs font-semibold -tracking-tighter">
                        ${ele.priceper_hour}
                      </div>
                    </div>
                    <h2 className="mt-1 text-black font-bold  text-xl font-roboto">
                      {ele.post}
                    </h2>
                    <ul className="mt-3">
                      <li className="flex items-center">
                        <img
                          src="/assets/svg/trending/treindingtime.svg"
                          alt=""
                          className="h-3 w-3"
                        />
                        <span className="ml-2 text-black text-sm ">
                          {ele.adress}
                        </span>
                      </li>
                      <li className="flex items-center mt-1">
                        <img
                           src="/assets/svg/trending/star.svg"
                          alt=""
                          className="h-3 w-3"
                        />
                        <span className="ml-2 text-black text-sm ">
                          {ele.priceper_hour}/HR or {ele.priceper_month}/PM
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                      <div className=" flex-1  flex items-center  gap-2">
                      <img
                          src={ele.reviwemen}
                          alt=""
                          className="h-8 w-8 rounded-full object-cover object-top"
                        />
                        <div className=" ">
                            <h3 className=" text-sm text-black font-roboto font-medium">{ele.reviewer}</h3>
                            <h3 className=" text-xs text-secondarys1 font-roboto  capitalize ">{ele.review_text}</h3>


                        </div>
                        
                      </div>
                      <button className="bg-primary flex-1 w-full px-1 py-3 rounded-lg text-white  text-xs xl-2:text-sm font-semibold font-roboto">
                      View All Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="py-10 text-xl text-red-600 font-semibold text-center">
            Data not Available
          </p>
        )}

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= data.length}
          className="shrink-0 h-10 w-10 border border-primary rounded-full flex items-center justify-center disabled:opacity-50"
        >
          <img
            src="/assets/svg/carasol/right.svg"
            alt=""
            className="h-4 w-4"
          />
        </button>
      </div>
      <img src="/assets/svg/work/arrow.svg" alt="" className=" absolute left-14  w-[150px] h-16 top-24 max-md:hidden" />
    </div>
  );
};

export default TrendingPackage;
