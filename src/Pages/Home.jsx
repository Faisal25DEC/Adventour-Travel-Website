import React from "react";
import Fade from "react-reveal/Fade";
import HomeBanner from "../Components/HomeComponents/HomeBanner";
import { TopDestinations } from "../Components/HomeComponents/TopDestinations";
import { HolidayEasily } from "../Components/HomeComponents/HolidayEasily";
import { OurExperiences } from "../Components/HomeComponents/OurExperiences";
import { Testimonials } from "../Components/HomeComponents/Testimonials";

export const Home = () => {
  return (
    <div>
      <Fade up>
        <HomeBanner />
      </Fade>
      <Fade right>
        <TopDestinations />
      </Fade>
      <Fade up>
        <HolidayEasily />
      </Fade>
      <Fade up>
        <OurExperiences />
      </Fade>
      <Fade down>
        <Testimonials />
      </Fade>
    </div>
  );
};
