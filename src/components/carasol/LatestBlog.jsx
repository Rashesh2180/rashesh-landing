import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";

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
  {
    id: 4,
    date: "27 APR, 2023",
    title: "Designer’s checklist for every UX/UI project.",
    img: "/assets/images/blogs/Section → Article → Figure → Link → image (1).png",
  },
  {
    id: 5,
    date: "27 APR, 2023",
    title: "Make more productive work flow in few steps.",
    img: "/assets/images/blogs/Section → Article → Figure → Link → image (2).png",
  },
];

const LatestBlog = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1300px] mx-auto sm:py-20 py-10 xl:px-16 lg:px-10 px-5">
      <h1 className="section-title text-center">
        Latest
        <span className="text-primary"> Blogs</span>
      </h1>

      <div className="flex sm:gap-8 gap-4 items-center justify-start mt-14">
        {/* Left Button */}
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="h-10 w-10 border border-primary shrink-0 rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/left.svg" alt="Previous" className="h-4 w-4" />
        </button>

        {/* Swiper Component */}
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
          className="!py-5 !px-2 w-full  !mx-auto"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,  // Ensure this is set to 3 for larger screens
            },
          }}
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="justify-start mx-auto ">
                <div className="mx-auto p-5 hover:shadow-xl max-w-[310px] hover:rounded-[24px] hover:border-t border-t-primary">
                  <img
                    src={ele.img}
                    alt={ele.title}
                    className="h-[250px] object-fill object-top w-full"
                  />
                  <h3 className="text-xs text-secondarys1 font-roboto mt-2">{ele.date}</h3>
                  <h5 className="mt-2 font-roboto text-lg font-medium">{ele.title}</h5>
                  <button className="mt-5 capitalize text-primary border text-xs border-primary rounded-lg px-4 py-2 font-medium font-roboto">
                    Read more
                  </button>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="capitalize text-red-600 font-semibold text-xl text-center">
              No data Found
            </p>
          )}
        </Swiper>

        {/* Right Button */}
        <button
          onClick={() => swiperRef?.slideNext()}
          className="h-10 w-10 shrink-0 border border-primary rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/right.svg" alt="Next" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
