import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";

import { Pagination } from "swiper/modules";

const data = [
  {
    id: 1,
    title: "Nice work!",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10524.jpg",
  },
  {
    id: 2,
    title: "Impressive",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
  {
    id: 3,
    title: "Good Work",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
  {
    id: 3,
    title: "Good Work",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
  {
    id: 3,
    title: "Good Work",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
];
const Rating = () => {
  return (
    <div className=" lg:my-16 lg:py-10 xl:pl-16 lg:pl-10 px-5 flex max-lg:flex-col items-center max-w-[1500px]  mx-auto relative">
      <div className="lg:pr-10 lg:max-w-[350px] shrink-0 w-full mx-auto max-lg:flex justify-center flex-col items-center">
        <h1 className="text-secondarys1 text-xs font-roboto">TESTIMONIAL</h1>
        <div className=" max-lg:flex items-center sm:gap-5 max-sm:flex-col">
        <h2 className="text-5xl font-[emoji] font-medium mt-2 text-secondary">
          Clients loves
        </h2>
        <h3 className="text-5xl font-[emoji] font-medium text-primary mt-2">
          Talent Spine.
        </h3>
        </div>
        <h2 className="mt-5 font-roboto font-medium text-2xl">
          <span className="text-primary">A+</span> Rating
        </h2>
        <p className="text-xs mt-1 text-secondarys1 font-roboto">
          Avg rating 4.8 makes us best market place.
        </p>
      </div>
      <div className=" z-[1000] w-full lg:overflow-x-hidden">
        {data.length > 0 ? (
          <div className="">
            <Swiper
             spaceBetween={20}
              pagination={{
                dynamicBullets: true,
                clickable:true
              }}
              modules={[Pagination]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper !p-2 rating-slider !py-20 !mx-auto"
            >
              {data.map((ele) => (
                <SwiperSlide key={ele.id} className="max-w-[370px] sm:mr-10 w-full mx-auto">
                  <div className="p-6 bg-white shadow-xl rounded-[24px] hover:border-t-2 border-primary">
                    <h1 className="text-primary font-medium font-roboto text-2xl">
                      {ele.title}
                    </h1>
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className="text-xs text-[#FBD300]" />
                      ))}
                    </div>
                    <div className="mt-8 leading-8 text-secondary pb-8 border-b-2 border-bordercolor font-roboto text-lg">
                      {ele.text}
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          src={ele.avtar}
                          alt=""
                          className="h-10 rounded-full object-top object-cover w-10"
                        />
                        <div>
                          <h2 className="font-roboto text-sm text-secondary font-medium">
                            {ele.reviewr}
                          </h2>
                          <h2 className="font-roboto text-xs text-secondarys1">
                            {ele.city}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p className="py-10 text-3xl text-red-600 text-center">
            Data not available
          </p>
        )}
      </div>

      <div className="rounded-3xl flex  h-full w-full absolute top-0 right-0 z-10 max-lg:hidden">
        <div className=" flex-1 h-full"></div>
        <div className="flex-1 h-full bg-[#E6F3FC] rounded-tl-r30 rounded-bl-r30"></div>
      </div>
      <img src="/assets/svg/work/arrow.svg" alt="" className=" absolute top-0 left-[20%] max-lg:hidden  w-[150px] h-14" />
    </div>
  );
};

export default Rating;
