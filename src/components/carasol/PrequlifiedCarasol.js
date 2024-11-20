    import React, { useState } from "react";
    import Categories from "../categories/Categories";

    const data = [
    {
        id: 1,
        name: "Sandy Williams",
        post: "Sales Manager",
        adress: "Miami, Florida",
        priceper_hour: "60",
        priceper_month: "1200",
        img: "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10524.jpg",
    },
    {
        id: 2,
        name: "Sandy Williams",
        post: "Sales Manager",
        adress: "Miami, Florida",
        priceper_hour: "60",
        priceper_month: "1200",
        img: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    },
    {
        id: 3,
        name: "Sandy Williams",
        post: "Sales Manager",
        adress: "Miami, Florida",
        priceper_hour: "60",
        priceper_month: "1200",
        img: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    },
    {
        id: 4,
        name: "Sandy Williams",
        post: "Sales Manager",
        adress: "Miami, Florida",
        priceper_hour: "60",
        priceper_month: "1200",
        img: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    },
  
    ];

    const PrequlifiedCarasol = () => {
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
        <div className="max-w-[1500px] mx-auto py-20 xl:px-16 lg:px-10 px-5">
        <h1 className=" section-title max-w-[566px] mx-auto">
            Hire Prequalified{" "}
            <span className="text-primary rounded-b-[10% 20%]">Talents</span>
            <img
            src="/assets/svg/curve/text-curve.svg"
            alt=""
            className="max-sm:mx-auto ml-auto mt-[10px]"
            />
        </h1>
        <div className="mt-10 md:px-[95px] px-5">
            <Categories categories={categories} />
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
            <div className=" flex  w-full justify-start mx-auto overflow-x-auto  gap-5 p-5">
                {data.slice(currentIndex, currentIndex + itemsPerPage).map((ele) => (
                <div
                    key={ele.id}
                    className="xl-2:max-w-[338.5px] max-w-[280px] shrink-0 w-full rounded-2xl border shadow-sm border-bordercolor overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-90"
                >
                    <div className="h-[200px] relative">
                    <img
                        src={ele.img}
                        alt=""
                        className="h-full w-full object-cover object-top rounded-2xl"
                    />
                    </div>
                    <div className="py-3 xl-2:px-5 px-3">
                    <div className="flex gap-1 items-center justify-between">
                        <h1 className="xl-2:text-2xl text-lg font-bold font-roboto text-black">
                        {ele.name}
                        </h1>
                        <div className="border border-primary text-primary px-2 py-1 rounded-[6px] font-roboto xl-2:text-sm text-xs font-semibold -tracking-tighter">
                        ${ele.priceper_hour} / HR
                        </div>
                    </div>
                    <h2 className="mt-1 text-secondarys1 xl-2:text-base text-sm font-roboto">
                        {ele.post}
                    </h2>
                    <ul className="mt-3">
                        <li className="flex items-center">
                        <img
                            src="/assets/svg/location/Vector (1).svg"
                            alt=""
                            className="h-3 w-2"
                        />
                        <span className="ml-2 text-black text-sm ">{ele.adress}</span>
                        </li>
                        <li className="flex items-center mt-1">
                        <img
                            src="/assets/svg/location/Vector (2).svg"
                            alt=""
                            className="h-3 w-2"
                        />
                        <span className="ml-2 text-black text-sm ">
                            {ele.priceper_hour}/HR or {ele.priceper_month}/PM
                        </span>
                        </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                        <button className="border-2 shrink-0 border-primary rounded-md h-10 w-10 flex items-center justify-center">
                        <img src="/assets/svg/heart/heart.svg" alt="" className="w-5 h-4" />
                        </button>
                        <button className="bg-primary w-full p-3 rounded-lg text-white  text-xs xl-2:text-sm font-semibold font-roboto">
                        Invite to job
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
        </div>
    );
    };

    export default PrequlifiedCarasol;