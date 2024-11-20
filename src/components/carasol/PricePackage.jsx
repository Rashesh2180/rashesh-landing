import React, { useState } from "react";
import Categories from "../categories/Categories";

const data = [
  {
    id: 1,
    name: "Graphic Design",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card1.png",
  },
  {
    id: 2,
    name: "WordPress",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card2.png",
  },
  {
    id: 3,
    name: "Web Design",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card3.png",
  },
  {
    id: 4,
    name: "Video Editing",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card4.png",
  },
];

const PricePackage = () => {
  const categories = [
    "All",
    "Designing",
    "Development",
    "Coding",
    "Big Data",
    "Editing",

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
    <div className="max-w-[1500px] mx-auto py-20 xl:px-16 lg:px-10 px-5 relative">
      <h1 className=" section-title max-w-[800px] mx-auto">
        Buy Pre - Priced
        <span className="text-primary rounded-b-[10% 20%]">
           Project Packages
        </span>
        <img
          src="/assets/svg/curve/curve2.svg"
          alt=""
          className="max-sm:mx-auto ml-auto mt-[10px] mr-4 max-w-[390px] w-full"
        />
      </h1>
      <div className="mt-10 md:px-[95px] px-5">
        <Categories categories={categories} browse="Browse all Project Packages" />
      </div>

      <div className="mt-10 w-full flex justify-start sm:gap-7 gap-2 items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="h-10 w-10 border border-primary rounded-full shrink-0 flex items-center justify-center disabled:opacity-50"
        >
          <img src="/assets/svg/carasol/left.svg" alt="" className="h-4 w-4" />
        </button>

        {data.length > 0 ? (
          <div className=" flex  w-full justify-start mx-auto overflow-x-auto  gap-5 sm:p-5">
            {data
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((ele) => (
                <div
                  key={ele.id}
                  className="xl-2:max-w-[338.5px] xl-2:px-5 px-3 xl-2:py-5 py-3 max-w-[280px] shrink-0 w-full rounded-2xl border shadow-sm border-bordercolor overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-90"
                >
                  <div className="h-[200px] relative">
                    <img
                      src={ele.img}
                      alt=""
                      className="h-full w-full object-cover object-top rounded-2xl"
                    />
                  </div>
                  <div className=" mt-4">
                    <div className="">
                      <h1 className="xl-2:text-2xl text-lg font-bold font-roboto text-primary">
                        {ele.name}
                      </h1>
                    
                    </div>
                    <h2 className="mt-1 text-secondarys1 xl-2:text-base text-sm font-light font-roboto">
                      {ele.post}
                    </h2>
               
                    <div className="mt-5 ">
                    
                      <button className="bg-primary w-full p-3 rounded-lg text-white  text-xs xl-2:text-sm font-semibold font-roboto">
                      View All
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
          <img src="/assets/svg/carasol/right.svg" alt="" className="h-4 w-4" />
        </button>
      </div>
      <img src="/assets/svg/work/lefy.svg" alt="" className=" w-[200px] h-20 absolute top-7 max-md:hidden right-0 " />
    </div>
  );
};

export default PricePackage;
