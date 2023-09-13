import React from "react";
import woman from "../../Assets/adventour-home-girl.png";
import '../HomeComponents/HomeStyling.css'

export const OurExperiences = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row align-items-center g-2">
          <div className="col-lg-5 col-sm-12">
            <div className="image-background">
              <img src={woman} className="img-fluid banner-image" alt="" />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-sm-12">
            <div className="comp-heading">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
                Our Experiences
              </h6>
              <h1>Save More with Our Best Deals</h1>
              <p className="sub">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                totam, dolores, eaque libero iusto sapiente et ipsam ut nam sed
                in porro maxime quo quibusdam quas perferendis quis dolor
                aspernatur
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <h2 className="stats">12+</h2>
                <p className="sub">Years Experience</p>
              </div>
              <div className="col-4">
                <h2 className="stats">15K+</h2>
                <p className="sub">Success Journey</p>
              </div>
              <div className="col-4">
                <h2 className="stats">9+</h2>
                <p className="sub">Awards <br /> Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
