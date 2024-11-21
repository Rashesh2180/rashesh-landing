import React from "react";
import Button from "../button/Button";

const Setting = () => {
  return (
    <div className="form-basic-need h-full">
      <h1 className="form-heading">Settings</h1>
      <div className="mt-8 border border-bordercolor rounded-r30 overflow-hidden">
        <div className="p-5 flex max-sm:flex-col gap-2 border-b border-bordercolor ">
          <div>
            <h1 className="font-inter font-bold text-sm text-start">
              Timezone
            </h1>
            <h3 className="max-w-[200px] leading-4 mt-1 text-xs text-secondarys1 font-inter">
              Required for timely communications
            </h3>
          </div>
          <select name="" id="" className="input-field text-secondarys1">
            <option value="">(GMT+5:30) Chennai, Kolkata,...  |</option>
          </select>
        </div>
        <div className="p-5 flex gap-2 border-b max-sm:flex-col border-bordercolor ">
          <div>
            <h1 className="font-inter font-bold text-sm text-start">Sell in</h1>
            <h3 className="max-w-[250px] leading-4 mt-1 text-xs text-secondarys1 font-inter">
              Display your services in your preferred currency
            </h3>
          </div>
          <select name="" id="" className="input-field text-secondarys1">
            <option value="">Indian Rupee (₹)</option>
          </select>
        </div>
        <div className="p-5 flex gap-2 max-sm:flex-col justify-between  ">
          <div>
            <h1 className="font-inter font-bold text-sm text-start">Payouts</h1>
            <h3 className=" leading-4 mt-1 text-xs text-secondarys1 font-inter">
            Instant and safe payouts to your preferred account
            </h3>
          </div>
         <Button text="Update" bgcolor="bg-success !capitalize" textcolor="text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Setting;
