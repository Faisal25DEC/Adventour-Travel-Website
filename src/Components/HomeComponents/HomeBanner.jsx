import React from "react";
import "./HomeStyling.css";
import homeBannerImage from "../../Assets/adventour-home-girl-top_png-transformed.png";
import { Navigate, useNavigate } from "react-router";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="home-div">
      <div className="container mt-5 mt-sm-5">
        <div className="row gap-5">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="text-section pe-2 mt-lg-0 mt-sm-5">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
                All you need is Adventour.
              </h6>
              <h1 className="heading">
                Let's Enjoy Your Life, Explore Beautiful{" "}
                <span style={{ color: "#0CC0DF" }}>Places.</span>🚀
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
                  onChange={(e) => {
                    navigate("/destinations", {
                      state: { state: e.target.value },
                    });
                  }}
                  style={{ background: "#1b1b1b", color: "white" }}
                  className="cities form-select mt-1"
                >
                  <option value="default">-- Choose City --</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Andaman">Andaman & Nicobar</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Maharashtra">Maharashtra</option>
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
              <button className="btn py-0">
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ color: "#000919", background: "transparent" }}
                ></i>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 float-endimage-background">
            <div className="image-background">
              <img
                src={homeBannerImage}
                className="banner-image img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
