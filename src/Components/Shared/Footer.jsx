import React from "react";
import logo from "../../Assets/icons/adventour.png";

export const Footer = () => {
  return (
    <div>
      <footer class="footer mt-auto py-3">
        <div class="container mt-4">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="d-inline-flex">
                <img src={logo} style={{ width: "30px" }} alt="" />
                <h6 className="mt-2 ms-2">Adventour.</h6>
              </div>
              <p className="sub mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                porro, excepturi a quam consequatur vel dolor atque voluptates
                itaque. Doloremque delectus perferendis impedit nesciunt, atque
                voluptatibus reiciendis magnam eaque repellendus.
              </p>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-6 mt-3">
              <h6>Sitemap</h6>
              <div className="footer-links mt-4">
                <p className="sub">Services</p>
                <p className="sub">About Us</p>
                <p className="sub">Bookings</p>
                <p className="sub">Cancellation</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-6 mt-3">
              <h6>Company</h6>
              <div className="footer-links mt-4">
                <p className="sub">Careers</p>
                <p className="sub">Our Team</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-6 mt-3">
              <h6>Support</h6>
              <div className="footer-links mt-4">
                <p className="sub">
                  Tower A, Block C,
                  <br />
                  Area C 24st, Hurany-490367
                </p>
                <p className="sub">
                  adventour@gmail.com <br />
                  +32 9737290930
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h6 style={{ fontSize: "14px" }}>Facebook ● Instagram ● YouTube</h6>
          </div>
          <hr />
          <div className="row">
            <div className="d-flex justify-content-between">
              <p style={{ color: "#6c9999", fontSize: "12px" }}>
                Ⓒ 2022 Adventour All Rights Reserved
              </p>
              <div className="quick-links d-flex gap-4">
                <h6 style={{ fontSize: "14px" }}>Terms & Condition </h6>
                <h6 style={{ fontSize: "14px" }}>Privacy Policy </h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
