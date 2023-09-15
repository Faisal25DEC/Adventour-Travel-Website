import React from "react";
import HomeBanner from "../Components/HomeComponents/HomeBanner";
import { TopDestinations } from "../Components/HomeComponents/TopDestinations";
import { HolidayEasily } from "../Components/HomeComponents/HolidayEasily";
import { OurExperiences } from "../Components/HomeComponents/OurExperiences";
import { Testimonials } from "../Components/HomeComponents/Testimonials";

export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <TopDestinations />
      <HolidayEasily />
      <OurExperiences />
      <Testimonials />
    </div>
  );
};
