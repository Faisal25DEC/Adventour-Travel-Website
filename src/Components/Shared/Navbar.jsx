import React from "react";
import logo from "../../Assets/icons/adventour.png";
import "../Shared/Shared.css";
import { signInWithGooglePopup } from "../../Utils/firebase/firebase";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav
        style={{ background: "#131313" }}
        className="navbar fixed-top navbar-expand-lg navbar-dark "
      >
        <div className="container">
          <Link to="/" className="nav-brand me-2">
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
                className="form-control search-box"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <Link to="/destinations" className="nav-item">
                <p className="nav-link">
                  Destinations
                </p>
              </Link>

              <Link to="/bookings" className="nav-item">
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
