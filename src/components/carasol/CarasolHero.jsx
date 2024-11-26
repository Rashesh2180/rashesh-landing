import React from "react";
import Button from "../button/Button";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const CarasolHero = () => {
  return (
    <div className="max-w-[1650px] mx-auto xl:px-16 px-5 lg:px-10 ">
      <Swiper
        autoplay={{
          delay: 10000,

          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper home-hero-carasol"
      >
        <SwiperSlide>
          <div className="  max-lg:gap-5 lg:h-screen h-full max-lg:py-5 flex max-lg:flex-col justify-center items-center gap-[14.5px]">
            <div className=" lg:max-w-[45%] w-full  ">
              <div className=" max-w-[212px]">
                <div className=" mt-8  relative  max-lg:flex flex-col-reverse gap-5 ">
                  <div className=" text-sm font-medium font-raleway px-6 py-[10px] rounded-[10.2px] bg-primaryp1 text-center ">
                    Global Talent Network
                  </div>
                  <img
                    src="/assets/svg/hero/triagle.svg"
                    alt=""
                    className=" h-10 w-10 ml-auto lg:absolute -top-16 right-0"
                  />
                </div>
              </div>
              <p className=" mt-[21px] xl:text-[36px] text-3xl max-w-[551px] font-normal leading-[50px] font-daysOne">
                <span className=" text-primary">Connecting</span> the Best{" "}
                <br /> Talent Worldwide with <br />{" "}
                <span className=" text-primary">Talent Spine</span>
              </p>
              <div className=" mt-8 flex items-center gap-6">
                <input
                  type="text"
                  placeholder="Search Top Talent Direct from here..."
                  className=" text-base shadow-lg font-raleway text-secondary border max-w-[380px] w-full border-secondary px-8 py-3 rounded-full"
                />
                <button className="py-3 font-raleway shadow-lg  px-5 rounded-full bg-primary text-white uppercase text-base font-bold">
                  Search
                </button>
              </div>
              <div className=" mt-8 flex gap-3">
                <Button
                  bgcolor=" bg-primary"
                  text="Project Packages"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-secondary"
                  text="FInd Talent"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-primary"
                  text="Find WOrk"
                  textcolor=" text-white"
                />
              </div>
              <div className=" mt-8 text-secondary text-sm font-normal font-roboto">
                Discover top professionals from every corner of the globe, ready
                to elevate your business.
              </div>
              <div className=" mt-8 flex justify-between items-center flex-wrap gap-2">
                <div className="flex items-center gap-5">
                  <div className="flex items-center">
                    <img
                      src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                      alt=""
                      className=" h-10 w-10 rounded-full object-cover"
                    />
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <img
                      src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <div className=" h-12 w-12 rounded-full object-cover border-4 bg-skygreen text-customgreen  text-4xl flex justify-center items-center border-white -ml-3">
                      +
                    </div>
                  </div>
                  <div>
                    <h3 className=" text-secondary text-lg font-medium font-roboto ">
                      18k+
                    </h3>
                    <h2 className=" text-secondarys1 text-sm font-normal font-roboto">
                      Individual Freelancer
                    </h2>
                  </div>
                </div>
                <div>
                  <h3 className=" text-secondary text-lg font-medium  font-roboto">
                    A+ Rating
                  </h3>
                  <div className=" flex ">
                    <div className=" flex items-center gap-1 ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className=" text-xs  text-[#FBD300]" />
                      ))}
                    </div>
                    <h2 className=" text-secondarys1 text-sm font-normal ml-3 font-roboto">
                      4.78 (300k+)
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full lg:max-w-[55%] h-[300px] flex justify-center flex-col max-lg:mt-5   items-center lg:h-[602px] relative">
              <div className=" h-full w-full pt-5 create-bg">
                
            
              </div>
              <div className="border border-primary rounded-2xl p-3 shadow-2xl lg:absolute  -bottom-10 lg:left-[60%] transform lg:-translate-x-1/2 font-inter text-secondary text-xs max-w-[230px]">
                <span className=" font-semibold">Work</span> from our hubs USA,
                Canada, Europe, India, Australia, Philippine
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="  max-lg:gap-5 lg:h-screen h-full max-lg:py-5 flex max-lg:flex-col justify-center items-center gap-[14.5px]">
            <div className=" lg:max-w-[42%] w-full  ">
              <div className=" max-w-[212px]">
                <div className=" mt-8  relative  max-lg:flex flex-col-reverse gap-5 ">
                  <div className=" text-sm font-medium font-raleway px-6 py-[10px] rounded-[10.2px] bg-primaryp1 text-center ">
                    Global Talent Network
                  </div>
                  <img
                    src="/assets/svg/hero/triagle.svg"
                    alt=""
                    className=" h-10 w-10 ml-auto lg:absolute -top-16 right-0"
                  />
                </div>
              </div>
              <p className=" mt-[21px] xl:text-[40px] text-3xl max-w-[551px] font-normal leading-[50px] font-daysOne">
                <span className=" text-primary">Connecting</span> the Best{" "}
                <br /> Talent Worldwide with <br />{" "}
                <span className=" text-primary">Talent Spine</span>
              </p>
              <div className=" mt-8 flex items-center gap-6">
                <input
                  type="text"
                  placeholder="Search Top Talent Direct from here..."
                  className=" text-base shadow-lg font-raleway text-secondary border max-w-[380px] w-full border-secondary px-8 py-3 rounded-full"
                />
                <button className="py-3 font-raleway shadow-lg  px-5 rounded-full bg-primary text-white uppercase text-base font-bold">
                  Search
                </button>
              </div>
              <div className=" mt-8 flex gap-3">
                <Button
                  bgcolor=" bg-primary"
                  text="Project Packages"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-secondary"
                  text="FInd Talent"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-primary"
                  text="Find WOrk"
                  textcolor=" text-white"
                />
              </div>
              <div className=" mt-8 text-secondary text-sm font-normal font-roboto">
                Discover top professionals from every corner of the globe, ready
                to elevate your business.
              </div>
              <div className=" mt-8 flex justify-between items-center flex-wrap gap-2">
                <div className="flex items-center gap-5">
                  <div className="flex items-center">
                    <img
                      src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                      alt=""
                      className=" h-10 w-10 rounded-full object-cover"
                    />
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <img
                      src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <div className=" h-12 w-12 rounded-full object-cover border-4 bg-skygreen text-customgreen  text-4xl flex justify-center items-center border-white -ml-3">
                      +
                    </div>
                  </div>
                  <div>
                    <h3 className=" text-secondary text-lg font-medium font-roboto ">
                      18k+
                    </h3>
                    <h2 className=" text-secondarys1 text-sm font-normal font-roboto">
                      Individual Freelancer
                    </h2>
                  </div>
                </div>
                <div>
                  <h3 className=" text-secondary text-lg font-medium  font-roboto">
                    A+ Rating
                  </h3>
                  <div className=" flex ">
                    <div className=" flex items-center gap-1 ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className=" text-xs  text-[#FBD300]" />
                      ))}
                    </div>
                    <h2 className=" text-secondarys1 text-sm font-normal ml-3 font-roboto">
                      4.78 (300k+)
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full lg:max-w-[58%] h-[300px] flex justify-center flex-col max-lg:mt-5   items-center lg:h-[602px] relative">
              <div className=" h-full w-full pt-5">
                <img
                  src="/assets/images/hero/Map.png"
                  alt=""
                  className=" h-full w-full "
                />
              </div>
              <div className="border border-primary rounded-2xl p-3 shadow-2xl lg:absolute  -bottom-10 lg:left-[60%] transform lg:-translate-x-1/2 font-inter text-secondary text-xs max-w-[230px]">
                <span className=" font-semibold">Work</span> from our hubs USA,
                Canada, Europe, India, Australia, Philippine
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="  max-lg:gap-5 lg:h-screen h-full max-lg:py-5 flex max-lg:flex-col justify-center items-center gap-[14.5px]">
            <div className=" lg:max-w-[42%] w-full  ">
              <div className=" max-w-[212px]">
                <div className=" mt-8  relative  max-lg:flex flex-col-reverse gap-5 ">
                  <div className=" text-sm font-medium font-raleway px-6 py-[10px] rounded-[10.2px] bg-primaryp1 text-center ">
                    Global Talent Network
                  </div>
                  <img
                    src="/assets/svg/hero/triagle.svg"
                    alt=""
                    className=" h-10 w-10 ml-auto lg:absolute -top-16 right-0"
                  />
                </div>
              </div>
              <p className=" mt-[21px] xl:text-[40px] text-3xl max-w-[551px] font-normal leading-[50px] font-daysOne">
                <span className=" text-primary">Connecting</span> the Best{" "}
                <br /> Talent Worldwide with <br />{" "}
                <span className=" text-primary">Talent Spine</span>
              </p>
              <div className=" mt-8 flex items-center gap-6">
                <input
                  type="text"
                  placeholder="Search Top Talent Direct from here..."
                  className=" text-base shadow-lg font-raleway text-secondary border max-w-[380px] w-full border-secondary px-8 py-3 rounded-full"
                />
                <button className="py-3 font-raleway shadow-lg  px-5 rounded-full bg-primary text-white uppercase text-base font-bold">
                  Search
                </button>
              </div>
              <div className=" mt-8 flex gap-3">
                <Button
                  bgcolor=" bg-primary"
                  text="Project Packages"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-secondary"
                  text="FInd Talent"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-primary"
                  text="Find WOrk"
                  textcolor=" text-white"
                />
              </div>
              <div className=" mt-8 text-secondary text-sm font-normal font-roboto">
                Discover top professionals from every corner of the globe, ready
                to elevate your business.
              </div>
              <div className=" mt-8 flex justify-between items-center flex-wrap gap-2">
                <div className="flex items-center gap-5">
                  <div className="flex items-center">
                    <img
                      src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                      alt=""
                      className=" h-10 w-10 rounded-full object-cover"
                    />
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <img
                      src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <div className=" h-12 w-12 rounded-full object-cover border-4 bg-skygreen text-customgreen  text-4xl flex justify-center items-center border-white -ml-3">
                      +
                    </div>
                  </div>
                  <div>
                    <h3 className=" text-secondary text-lg font-medium font-roboto ">
                      18k+
                    </h3>
                    <h2 className=" text-secondarys1 text-sm font-normal font-roboto">
                      Individual Freelancer
                    </h2>
                  </div>
                </div>
                <div>
                  <h3 className=" text-secondary text-lg font-medium  font-roboto">
                    A+ Rating
                  </h3>
                  <div className=" flex ">
                    <div className=" flex items-center gap-1 ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className=" text-xs  text-[#FBD300]" />
                      ))}
                    </div>
                    <h2 className=" text-secondarys1 text-sm font-normal ml-3 font-roboto">
                      4.78 (300k+)
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full lg:max-w-[58%] h-[300px] flex justify-center flex-col max-lg:mt-5   items-center lg:h-[602px] relative">
              <div className=" h-full w-full pt-5">
                <img
                  src="/assets/images/hero/Map.png"
                  alt=""
                  className=" h-full w-full "
                />
              </div>
              <div className="border border-primary rounded-2xl p-3 shadow-2xl lg:absolute  -bottom-10 lg:left-[60%] transform lg:-translate-x-1/2 font-inter text-secondary text-xs max-w-[230px]">
                <span className=" font-semibold">Work</span> from our hubs USA,
                Canada, Europe, India, Australia, Philippine
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="  max-lg:gap-5 lg:h-screen h-full max-lg:py-5 flex max-lg:flex-col justify-center items-center gap-[14.5px]">
            <div className=" lg:max-w-[42%] w-full  ">
              <div className=" max-w-[212px]">
                <div className=" mt-8  relative  max-lg:flex flex-col-reverse gap-5 ">
                  <div className=" text-sm font-medium font-raleway px-6 py-[10px] rounded-[10.2px] bg-primaryp1 text-center ">
                    Global Talent Network
                  </div>
                  <img
                    src="/assets/svg/hero/triagle.svg"
                    alt=""
                    className=" h-10 w-10 ml-auto lg:absolute -top-16 right-0"
                  />
                </div>
              </div>
              <p className=" mt-[21px] xl:text-[40px] text-3xl max-w-[551px] font-normal leading-[50px] font-daysOne">
                <span className=" text-primary">Connecting</span> the Best{" "}
                <br /> Talent Worldwide with <br />{" "}
                <span className=" text-primary">Talent Spine</span>
              </p>
              <div className=" mt-8 flex items-center gap-6">
                <input
                  type="text"
                  placeholder="Search Top Talent Direct from here..."
                  className=" text-base shadow-lg font-raleway text-secondary border max-w-[380px] w-full border-secondary px-8 py-3 rounded-full"
                />
                <button className="py-3 font-raleway shadow-lg  px-5 rounded-full bg-primary text-white uppercase text-base font-bold">
                  Search
                </button>
              </div>
              <div className=" mt-8 flex gap-3">
                <Button
                  bgcolor=" bg-primary"
                  text="Project Packages"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-secondary"
                  text="FInd Talent"
                  textcolor=" text-white"
                />
                <Button
                  bgcolor=" bg-primary"
                  text="Find WOrk"
                  textcolor=" text-white"
                />
              </div>
              <div className=" mt-8 text-secondary text-sm font-normal font-roboto">
                Discover top professionals from every corner of the globe, ready
                to elevate your business.
              </div>
              <div className=" mt-8 flex justify-between items-center flex-wrap gap-2">
                <div className="flex items-center gap-5">
                  <div className="flex items-center">
                    <img
                      src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                      alt=""
                      className=" h-10 w-10 rounded-full object-cover"
                    />
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <img
                      src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                      alt=""
                      className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                    />
                    <div className=" h-12 w-12 rounded-full object-cover border-4 bg-skygreen text-customgreen  text-4xl flex justify-center items-center border-white -ml-3">
                      +
                    </div>
                  </div>
                  <div>
                    <h3 className=" text-secondary text-lg font-medium font-roboto ">
                      18k+
                    </h3>
                    <h2 className=" text-secondarys1 text-sm font-normal font-roboto">
                      Individual Freelancer
                    </h2>
                  </div>
                </div>
                <div>
                  <h3 className=" text-secondary text-lg font-medium  font-roboto">
                    A+ Rating
                  </h3>
                  <div className=" flex ">
                    <div className=" flex items-center gap-1 ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className=" text-xs  text-[#FBD300]" />
                      ))}
                    </div>
                    <h2 className=" text-secondarys1 text-sm font-normal ml-3 font-roboto">
                      4.78 (300k+)
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full lg:max-w-[58%] h-[300px] flex justify-center flex-col max-lg:mt-5   items-center lg:h-[602px] relative">
              <div className=" h-full w-full pt-5">
                <img
                  src="/assets/images/hero/Map.png"
                  alt=""
                  className=" h-full w-full "
                />
              </div>
              <div className="border border-primary rounded-2xl p-3 shadow-2xl lg:absolute  -bottom-10 lg:left-[60%] transform lg:-translate-x-1/2 font-inter text-secondary text-xs max-w-[230px]">
                <span className=" font-semibold">Work</span> from our hubs USA,
                Canada, Europe, India, Australia, Philippine
              </div>
            </div>  
          </div>
        </SwiperSlide>{" "}
      </Swiper>

      <div className=" w-full mb-20 overflow-x-auto gap-2 rounded-[20px] px-10  flex justify-between items-center shadow-xl   bg-white">
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          AWS
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          Google Cloud
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          IOS
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          Android
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          React JS
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          {" "}
          My SQL
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          Angular
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          Adobe Illustrator
        </NavLink>
        <NavLink className=" font-roboto text-sm font-normal text-nowrap text-primary">
          PHP
        </NavLink>
        <NavLink className=" font-roboto text-sm font-black text-nowrap text-primary ">
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default CarasolHero;
