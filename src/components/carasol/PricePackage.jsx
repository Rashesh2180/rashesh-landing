import React, { useState, useCallback } from "react";
import Categories from "../categories/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, A11y } from "swiper/modules";

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
  {
    id: 5,
    name: "Video Editing",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card4.png",
  },
  {
    id: 6,
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

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1500px] mx-auto py-20 xl:px-16 lg:px-10 px-5 relative">
      <h1 className="section-title max-w-[800px] mx-auto">
        Buy Pre - Priced{" "}
        <span className="text-primary rounded-b-[10% 20%]">
          Project Packages
        </span>
        <img
          src="/assets/svg/curve/curve2.svg"
          alt=""
          className="max-sm:mx-auto ml-auto mt-[10px] mr-4 max-w-[390px] w-full"
        />
      </h1>
      <div className="mt-10 md:px-20 px-5">
        <Categories
          categories={categories}
          browse="Browse all Project Packages"
        />
      </div>

      <div className="mt-10 w-full flex justify-center mx-auto sm:gap-5 gap-2 items-center relative">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="h-10 w-10 border border-primary shrink-0 rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/left.svg" alt="" className="h-4 w-4" />
        </button>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
         
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
          className="!py-5 !px-2"
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="flex justify-center mx-auto">
                <div className=" mx-auto xl-2:px-5 px-3 xl-2:py-5 py-3  max-w-[350.8px] shrink-0 w-full rounded-2xl border shadow-sm border-bordercolor overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-90">
                  <div className="h-[200px] relative">
                    <img
                      src={ele.img}
                      alt=""
                      className="h-full w-full object-cover object-top rounded-2xl"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="">
                      <h1 className="xl-2:text-2xl text-lg font-bold font-roboto text-primary">
                        {ele.name}
                      </h1>
                    </div>
                    <h2 className="mt-1 text-secondarys1 xl-2:text-base text-sm font-light font-roboto">
                      {ele.post}
                    </h2>

                    <div className="mt-5 ">
                      <button className="bg-primary w-full p-3 rounded-lg text-white text-xs xl-2:text-sm font-semibold font-roboto">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="py-10 text-xl text-red-600 font-semibold text-center">
              Data not Available
            </p>
          )}
        </Swiper>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="h-10 w-10 shrink-0 border border-primary rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/right.svg" alt="" className="h-4 w-4" />
        </button>
      </div>

      <img
        src="/assets/svg/work/lefy.svg"
        alt=""
        className="w-[200px] h-20 absolute top-7 max-md:hidden right-0"
      />
    </div>
  );
};

export default PricePackage;
