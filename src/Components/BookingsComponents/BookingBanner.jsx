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
          <div className="col-lg-7 col-md-7 col-sm-12 d-flex align-items-center">
            <div className="text-section pe-2">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
                Your journies are like treasure
              </h6>
              <h1 className='heading'>Relive Your Memories.</h1>
              <h1 className="heading">
                Your
                <span style={{ color: "#0CC0DF" }}> Bookings.</span>🚀
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
