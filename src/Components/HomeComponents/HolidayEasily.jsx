import React from "react";

export const HolidayEasily = () => {
  return (
    <div className="holiday-easily pt-5 pb-5">
      <div className="comp-heading text-center">
        <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
          Holiday Easily
        </h6>
        <h1>
          Book Tickets and Plan Your <br />
          Holidays Easily
        </h1>
        <p className="my-3 mb-4 sub">
          We are a travel company like no other. There should be no stopping to
          your experiences. <br />
          So get your tickets now and book an experience!
        </p>
      </div>
      <div className="container feature-icons">
        <div className="row text-center">
          <div className="col-lg-3 col-sm-6">
            <div className="icon-box">
              <i className="fa-solid fa-hourglass rounded-pill mb-1 fa-xl"></i>
              <h6>Easy to Buy Tickets</h6>
              <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-6">
            <div className="icon-box aligned-low">
            <i class="fa-solid fa-certificate rounded-pill mb-1 fa-xl"></i>
              <h6>Easy to Buy Tickets</h6>
              <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-6">
            <div className="icon-box">
              <i className="fa-solid fa-cubes-stacked rounded-pill mb-1 fa-xl"></i>
              <h6>Easy to Buy Tickets</h6>
              <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-6">
            <div className="icon-box aligned-low">
              <i className="fa-solid fa-clover rounded-pill mb-1 fa-xl"></i>
              <h6>Easy to Buy Tickets</h6>
              <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
