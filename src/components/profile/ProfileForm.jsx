import React from "react";

const ProfileForm = () => {
  return (
    <div className=" shadow-xl form-basic-need flex max-sm:flex-col max-sm:gap-5 ">
      <div className=" pr-5 xl:shrink-0 sm:border-r border-bordercolor flex flex-col justify-center items-center">
        <h1 className=" font-inter font-bold text-sm">Profile Photo</h1>
        <div className=" sm:mt-4 mt-3 bg-success h-20 w-20 mx-auto rounded-full shadow-inner flex justify-center items-center ">
          <img
            src="/assets/svg/profile/camera (2).svg"
            alt=""
            className=" h-10 w-10"
          />
        </div>
        <div className=" sm:mt-5 mt-3">
          <input type="file" id="upload" hidden />
          <label
            for="upload"
            className=" file-ulpoad-lablel text-nowrap border font-inter border-success text-sm  py-3 px-4  rounded-xl"
          >
            Upload Photo
          </label>
        </div>
        <h2 className=" text-xs text-center text-secondarys1 mt-2">
          Required*
        </h2>
        <button className=" text-nowrap  sm:mt-auto mt-3 text-xs  py-3 px-4 font-inter font-bold  text-white bg-success  rounded-xl">
          Upload Resume
        </button>
      </div>
      <div className=" sm:pl-5 grow">
        <label
          htmlFor=""
          className=" block text-xs text-secondarys1 font-inter"
        >
          Your pathmover page link
        </label>
        <div className=" mt-1 flex  gap-3 items-center">
          <input
            type="text"
            placeholder="pathmover / | testing_name02"
            className=" w-full border p-2 text-sm  rounded-lg !mt-1 outline-none border-bordercolor"
          />
          <button className="p-2 h-10 w-10 bg-[#CCEBC7] flex shrink-0 items-center justify-center rounded-full ml-auto">
            <img
              src="/assets/svg/profile/copy.svg"
              alt=""
              className=" h-4 w-4"
            />
          </button>
          <button className="py-2 px-4 shrink-0 bg-[#CCEBC7]  rounded-xl flex gap-2 items-center">
            <div className=" text-sm font-inter font-medium">Preview</div>
            <img
              src="/assets/svg/profile/preview.svg"
              alt=""
              className=" h-3 w-3"
            />
          </button>
        </div>
        <div className=" mt-3 flex gap-4">
          <div className="w-full">
            <label
              htmlFor=""
              className=" block text-xs text-secondarys1 font-inter"
            >
              First Name
            </label>
            <div className=" mt-2 rounded-lg  outline-none border overflow-hidden border-bordercolor flex justify-between items-center">
              <input
                type="text"
                placeholder="Flyboard"
                className=" w-full text-sm  flex-1 p-2    outline-none "
              />
              <div className="bg-[#CCEBC7] py-[2px] px-1 rounded-full font-inter text-[8px] relative right-3">
                8/30
              </div>
            </div>
          </div>
          <div className=" w-full">
            <label
              htmlFor=""
              className=" block text-xs text-secondarys1 font-inter"
            >
              Last Name
            </label>
            <div className=" mt-2 rounded-lg outline-none border overflow-hidden border-bordercolor flex justify-between items-center">
              <input
                type="text"
                placeholder="Ventures"
                className=" w-full text-sm  flex-1 p-2    outline-none "
              />
              <div className="bg-[#CCEBC7] py-[2px] px-1 rounded-full font-inter text-[8px] relative right-3">
                8/30
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <label
            htmlFor=""
            className=" block text-xs text-secondarys1 font-inter"
          >
            Your pathmover introduction{" "}
            <span className="  text-[#FF0000]">*</span>
          </label>
          <div className=" mt-2 rounded-lg outline-none border overflow-hidden border-bordercolor flex justify-between items-center">
            <input
              type="text"
              placeholder="This is the first thing people will see"
              className=" w-full text-sm  flex-1 p-2    outline-none "
            />
            <div className="bg-[#CCEBC7] py-[2px] px-1 rounded-full font-inter text-[8px] relative right-3">
              16/50
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <label
            htmlFor=""
            className=" block text-xs text-secondarys1 font-inter"
          >
            Your pathmover introduction{" "}
            <span className="  text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            placeholder="This is the first thing people will see"
            className=" w-full text-sm  flex-1 p-2  border  rounded-lg mt-2 border-bordercolor    outline-none "
          />
        </div>
        <div className=" mt-3">
          <label
            htmlFor=""
            className=" block text-xs text-secondarys1 font-inter"
          >
            About yourself <span className="  text-[#FF0000]">*</span>
          </label>

          <textarea
            name=""
            rows={4}
            className=" w-full text-sm  flex-1 p-2  border  rounded-lg mt-2 border-bordercolor     outline-none "
            placeholder="Tell us more about yourself, your interests and you experience"
            id=""
          ></textarea>
        </div>
        <div className=" mt-3">
          <label
            htmlFor=""
            className=" block text-xs text-secondarys1 font-inter font-bold"
          >
            Add Social Link <span className="  text-[#FF0000]">*</span>
          </label>
          <div className=" mt-1 flex gap-2 items-center">
            <select
              name=""
              className=" py-2 px-3 border text-sm  rounded-lg border-bordercolor  text-secondarys1 !mt-1 outline-none  "
              id=""
            >
              <option value="">Select</option>
            </select>
            <input
              type="text"
              placeholder="Add Social URL"
              className=" w-full text-sm  flex-1 p-2  border  rounded-lg border-bordercolor    !mt-2 outline-none "
            />
            <button className=" p-2 rounded-xl bg-[#E5E5E5]  h-10 w-10 flex justify-center items-center">
              <img
                src="/assets/svg/profile/delete (2).svg"
                alt=""
                className=" h-4 w-4"
              />
            </button>
          </div>
        </div>
        <button className=" mt-3 border border-dashed text-sm rounded-xl  font-inter border-bordercolor w-full p-3 text-secondarys1">
        + Add More URL

        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
