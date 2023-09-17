import React, { useState } from "react";
import logo from "../../Assets/icons/adventour.png";
import "../Shared/Shared.css";
import { signInWithGooglePopup } from "../../Utils/firebase/firebase";
import { Link, useLocation } from "react-router-dom";

export const NavbarShared = () => { 
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      
      <nav
        style={{ background: "#131313" }}
        className="navbar fixed-top navbar-expand-lg navbar-dark "
      >
        <div className="container">
          <Link to="/" >
            <img src={logo} alt="" className="img-fluid me-2" width={50} />
            Adventour.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <form className="">
              <input
                className="form-control search-box ms-lg-4 ms-sm-0 mt-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav gap-3">
              <Link to="/" className={`nav-brand me-2 ${isLinkActive("/") ? "active-link" : ""}`} onClick={() => setActiveLink("home")}>
                <p className="nav-link " aria-current="page" aria-disabled="false" tabIndex="-1">
                  Home
                </p>
              </Link>
              <Link to="/destinations"  className={`nav-item ${isLinkActive("/destinations") ? "active-link" : ""}`} onClick={() => setActiveLink("destinations")}>
                <p className="nav-link" aria-disabled="true" tabIndex="-1">
                  Destinations
                </p>
              </Link>

              <Link to="/bookings" className={`nav-item ${isLinkActive("/bookings") ? "active-link" : ""}`} onClick={() => setActiveLink("bookings")}>
                <p
                  className="nav-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Bookings
                </p>
              </Link>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Login
                </button>
                <ul class="dropdown-menu">
                  <li
                    className="dropdown-item"
                    onClick={() => {
                      signInWithGooglePopup()
                        .then((res) => console.log(res))
                        .catch((res) => {
                          alert("Something went wrong");
                        });
                    }}
                  >
                    Login With Google
                  </li>
                  <li>
                    <a class="dropdown-item" href="/auth">
                      Login With Email
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
