import React, { useEffect } from "react";
import logo from "../../Assets/icons/adventour.png";
import "../Shared/Shared.css";
import {
  createUserDocumentFromAuth,
  getUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../Utils/firebase/firebase";
import { Link } from "react-router-dom";
import { userReducer } from "./../../Redux/userReducer/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../Redux/userReducer/userActions";
import { getAllProducts } from "../../Redux/productReducer/productActions";

export const Navbar = () => {
  const { isAuth, userDetails } = useSelector((state) => state.userReducer);
  console.log(userDetails);

  const dispatch = useDispatch();
  console.log(isAuth);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <Link to="/destinations" className="nav-item">
                <p className="nav-link">Destinations</p>
              </Link>

              <Link to="/bookings" className="nav-item">
                <p className="nav-link" tabIndex="-1" aria-disabled="true">
                  Bookings
                </p>
              </Link>
              <Link className="nav-item">
                <p className="nav-link" tabIndex="-1">
                  {isAuth && !userDetails.displayName
                    ? userDetails.displayName
                    : ""}
                </p>
              </Link>
              {!isAuth ? (
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
                          .then((user) => {
                            console.log(user);
                          })
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
              ) : (
                <button
                  style={{ height: "2.5rem" }}
                  className="btn"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
