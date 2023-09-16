import React from 'react'
import homeBannerImage from '../../Assets/adventour-home-girl-top_png-transformed.png'
import { useNavigate } from 'react-router'


export const BookingBanner = () => {
  return (
    <div className="home-div">
      <div className="container mt-5">
        <div className="row gap-5">
          
          <div className="col-lg-4 col-md-4 col-sm-12 float-endimage-background">
            <div className="image-background">
              <img
                src={homeBannerImage}
                className="banner-image img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 align-items-center">
            <div className="text-section pe-2">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
                All you need is Adventour.
              </h6>
              <h1 className="heading">
                Your Journies Are Like {" "}
                <span style={{ color: "#0CC0DF" }}>Treasure.</span>🚀
              </h1>
              <p className="my-3 mb-4 sub">
                We are a travel company like no other. There should be no
                stopping to your experiences. So get your tickets now and book
                an experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
