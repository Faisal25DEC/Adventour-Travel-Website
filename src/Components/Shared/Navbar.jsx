import React from "react";
import logo from "../../Assets/icons/adventour.png";
import "../Shared/Shared.css";
import { signInWithGooglePopup } from "../../Utils/firebase/firebase";

export const Navbar = () => {
  return (
    <div>
      <nav
        style={{ background: "#131313" }}
        className="navbar fixed-top navbar-expand-lg navbar-dark "
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" className="img-fluid me-2" width={50} />
            Adventour.
          </a>
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
            <form className="d-flex">
              <input
                className="form-control search-box me-2"
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
              <li className="nav-item">
                <a className="nav-link" href="/destinations">
                  Destinations
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about-us"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  About Us
                </a>
              </li>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
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
                    <a class="dropdown-item" href="#">
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
