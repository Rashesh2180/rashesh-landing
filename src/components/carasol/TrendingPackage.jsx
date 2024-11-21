import React, { useState } from "react";
import Categories from "../categories/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";

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
  {
    id: 5,
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
  {
    id: 6,
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

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1500px] mx-auto sm:py-24 py-5 xl:px-16 lg:px-10 px-5 relative">
      <h1 className="section-title max-w-[439px] mx-auto flex flex-wrap justify-center">
        Trending
        <div>
          <span className="text-primary"> Packages</span>
          <img
            src="/assets/svg/curve/text-curve.svg"
            alt=""
            className="ml-auto mt-[10px] max-w-[220px] w-full"
          />
        </div>
      </h1>

      <div className="mt-10 md:px-20 px-5 py-1">
        <Categories categories={categories} />
      </div>

      <div className="mt-10 w-full flex justify-center mx-auto lg:gap-5 gap-2 items-center relative">
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
                <div className="mx-auto xl:px-5 px-3 py-3 max-w-[350.8px] shrink-0 w-full rounded-2xl border shadow-sm border-bordercolor overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-90">
                  <div className="h-[200px] relative">
                    <img
                      src={ele.img}
                      alt={ele.name}
                      className="h-full w-full object-top rounded-2xl"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1 items-center justify-between mt-3">
                      <h1 className="text-lg font-bold text-primary uppercase tracking-wider">
                        {ele.name}
                      </h1>
                      <div className="border border-primary text-primary px-2 py-1 rounded-[6px] text-xs font-semibold">
                        ${ele.priceper_hour}
                      </div>
                    </div>
                    <h2 className="mt-1 text-black font-bold text-xl">
                    {ele.post.length > 20 ? ele.post.slice(0, 20) + "..." : ele.post}
                    </h2>
                    <ul className="mt-3">
                      <li className="flex items-center">
                        <img
                          src="/assets/svg/trending/treindingtime.svg"
                          alt=""
                          className="h-3 w-3"
                        />
                        <span className="ml-2 text-black text-sm">{ele.adress}</span>
                      </li>
                      <li className="flex items-center mt-1">
                        <img
                          src="/assets/svg/trending/star.svg"
                          alt=""
                          className="h-3 w-3"
                        />
                        <span className="ml-2 text-black text-sm">
                          {ele.priceper_hour}/HR or {ele.priceper_month}/PM
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-3 flex-wrap justify-between ">
                      <div className="flex-1 flex items-center gap-2">
                        <img
                          src={ele.reviwemen}
                          alt=""
                          className="h-8 w-8 rounded-full object-cover object-top"
                        />
                        <div>
                          <h3 className="text-sm text-black font-medium">{ele.reviewer}</h3>
                          <h3 className="text-xs text-secondarys1 capitalize">
                            {ele.review_text}
                          </h3>
                        </div>
                      </div>
                      <button className="bg-primary flex-1 px-1 py-3 rounded-lg text-white lg:text-xs text-[10px] font-semibold">
                        View All Details
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
          disabled={swiperRef?.realIndex + 1 >= data.length}
          className="h-10 w-10 border border-primary rounded-full  shrink-0 flex justify-center items-center disabled:opacity-50"
        >
          <img src="/assets/svg/carasol/right.svg" alt="" className="h-4 w-4" />
        </button>
      </div>

      <img
        src="/assets/svg/work/arrow.svg"
        alt=""
        className="absolute left-14 w-[150px] h-16 top-24 hidden md:block"
      />
    </div>
  );
};

export default TrendingPackage;
