import React from "react";

const Adress = () => {
  return (
    <div className="form-basic-need h-full">
      <h1 className="form-heading">Address & Location</h1>
      <div className="mt-8 black-placeholder">
        <label htmlFor="" className="block text-xs text-secondarys1 font-inter">
          Address <span className=" ">*</span>
        </label>
        <input
          type="text"
          placeholder="Global Business Park, Zirakpur"
          className="w-full text-sm flex-1 p-2 border rounded-lg mt-2 border-bordercolor outline-none"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="w-full">
          <label htmlFor="" className="block text-xs text-secondarys1 font-inter">
            Country <span className=" ">*</span>
          </label>
          <select name="" id="" className="w-full input-field !mt-2">
            <option value="">India</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="" className="block text-xs text-secondarys1 font-inter">
            City <span className=" ">*</span>
          </label>
          <select name="" id="" className="w-full input-field !mt-2">
            <option value="">Chandigarh</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="" className="block text-xs text-secondarys1 font-inter">
            Zip Code <span className=" ">*</span>
          </label>
          <select name="" id="" className="w-full input-field !mt-2">
            <option value="">160021</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="" className="block text-xs text-secondarys1 font-inter">
            State <span className=" ">*</span>
          </label>
          <select name="" id="" className="w-full input-field !mt-2">
            <option value="">Chandigarh</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Adress;
