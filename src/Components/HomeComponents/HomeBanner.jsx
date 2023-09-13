import React from "react";
import "./HomeBanner.css";
import homeBannerImage from '../../Assets/homeBannerImage.png'

const HomeBanner = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row gap-5">
          <div className="col-7">
            <div className="text-section pe-2">
              <h6 style={{color: "#0CC0DF", letterSpacing: "2px"}}>All you need is Adventour.</h6>
              <h1 className="heading">
                Let's Enjoy Your Life, Explore Beautiful <span style={{color: "#0CC0DF"}}>Places.</span>🚀
              </h1>
              <p className="my-3 mb-4 sub">
                We are a travel company like no other. There should be no
                stopping to your experiences. So get your tickets now and book
                an experience!
              </p>
            </div>
            <div className="search-destinations d-flex">
              <div style={{ background: "#1b1b1b" }} className="col-5">
                <label style={{ background: "#1b1b1b" }} htmlFor="">
                  Location
                </label>
                <select
                  style={{ background: "#1b1b1b", color: "white", width:"50%" }}
                  className="form-select mt-1" 
                >
                  <option value="default">Bali, INA</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-1 vl"></div>
              <div style={{ background: "#1b1b1b" }} className="col-5 ms-4">
                <label style={{ background: "#1b1b1b" }} htmlFor="">
                  Date
                </label>
                <input
                  style={{
                    background: "#1b1b1b",
                    color: "white",
                    width: "60%",
                  }}
                  type="date"
                  className="form-control mt-1"
                />
                
              </div>
              <button className="btn py-0"><i class="fa-solid fa-magnifying-glass" style={{color: "#000919", background: "transparent"}}></i></button>
            </div>
          </div>
          <div className="col-4 float-endimage-background">
            <div className="image-background">
                <img src={homeBannerImage} className="banner-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
