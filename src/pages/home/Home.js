import React from "react";
import CarasolHero from "../../components/carasol/CarasolHero";
import PrequlifiedCarasol from "../../components/carasol/PrequlifiedCarasol";
import HowWork from "../../components/home/howwrok/HowWork";
import PricePackage from "../../components/carasol/PricePackage";
import TrendingPackage from "../../components/carasol/TrendingPackage";
import DigitalSkill from "../../components/home/digitalSkills/DigitalSkill";
import Keys from "../../components/home/keys/Keys";
import Rating from "../../components/home/rating/Rating";
import LatestBlog from "../../components/carasol/LatestBlog";
import DateSelect from "../../components/home/dateselect/DateSelect";

const Home = () => {
  return (
    <div className=" ">
      <CarasolHero />
      <PrequlifiedCarasol />
      <HowWork />
      <PricePackage />
      <TrendingPackage/>
      <DigitalSkill/>
      <Keys/>
      <Rating/>
      <LatestBlog/>
      <DateSelect/>
    </div>
  );
};

export default Home;
