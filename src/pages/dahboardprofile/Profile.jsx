import React from "react";
import ProfileForm from "../../components/profile/ProfileForm";
import ThemeSelect from "../../components/profile/ThemeSelect";
import Adress from "../../components/profile/Adress";
import Setting from "../../components/profile/Setting";
import Tags from "../../components/profile/Tags";
import RoadService from "../../components/profile/RoadService";

const Profile = () => {
  return (
    <div className=" max-lg:p-4">
      <div className=" my-5 flex justify-between items-center xl:pr-7 sm:pr-4 overflow-x-auto ">
        <div className=" flex items-center gap-4">
          <button className="  bg-skygreen border text-sm border-success shadow-xl rounded-xl text-success font-inter font-bold py-3 px-8">
            Profile
          </button>
          <button className="  bg-white border text-sm border-bordercolor shadow-xl rounded-xl text-secondarys1 font-inter  py-3 px-8">
            Account
          </button>
        </div>
        <button className=" flex items-center gap-[10px] shrink-0 max-sm:ml-4 border bg-success shadow-2xl border-success rounded-2xl py-3 px-4">
          <div className=" text-white font-bold text-sm  font-inter ">
            Save Changes
          </div>
        </button>
      </div>

      <div className="bg-skygreen xl:p-7 p-4 rounded-l-3xl max-lg:rounded-3xl">
        {/* profile form */}
        <div className="  flex max-lg:flex-col max-lg:gap-5 div-border-b">
          <div className="flex-[9] lg:pr-5 lg:border-r border-bordercolor">
            <ProfileForm />
          </div>
          <div className="flex-[3] lg:pl-5 ">
            <ThemeSelect />
          </div>
        </div>

        {/* afdress  & setting */}
        <div className="mt-6 flex h-full max-lg:gap-5 max-lg:flex-col div-border-b">
          <div className="flex-1 lg:pr-5 lg:border-r border-bordercolor">
            <Adress />
          </div>
          <div className="lg:pl-5 flex-1">
            <Setting />
          </div>
        </div>

        {/* switch tags */}
        <div className="mt-6  div-border-b ">
          <Tags />
        </div>
        {/* road services */}
        <div className="mt-6">
          <RoadService />
        </div>
      </div>
    </div>
  );
};

export default Profile;
