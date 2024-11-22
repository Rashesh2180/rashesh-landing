import React, { useState } from "react";
import Login from "../../pages/login/Login"; 
import Signup from "../../pages/signup/Signup"; 

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login"); 

  const handleTabChange = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <div className="auth-container">
      
      <div className="flex justify-start items-center bg-success max-w-[250px] rounded-[75px] mx-auto">
        <button
          onClick={() => handleTabChange("login")}
          className={`text-white font-roboto font-bold py-2 grow ${
            activeTab === "login"
              ? "bg-[#0D58AC] rounded-[75px] "
              : " text-sm"
          }`}
        
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange("signup")}
          className={`text-white font-roboto font-bold py-2 text-center grow ${
            activeTab === "signup"
              ? "bg-[#0D58AC] rounded-[75px] "
              : " text-sm"
          }`}
        >
          Sign-up
        </button>
      </div>

      {activeTab === "login" && <Login />}
      {activeTab === "signup" && <Signup />}
    </div>
  );
};

export default AuthTabs;
