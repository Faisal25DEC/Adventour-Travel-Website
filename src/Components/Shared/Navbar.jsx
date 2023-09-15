import React from "react";
import logo from "../../Assets/icons/adventour.png";
import "../Shared/Shared.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav
        style={{ background: "#131313" }}
        className="navbar fixed-top navbar-expand-lg navbar-dark "
      >
        <div className="container">
          <Link to="/" className="nav-brand">
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
              <button className="btn btn-primary p-1 px-3">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
