import React, { useEffect , useState } from "react";
import logo from "../../Assets/icons/adventour.png";
import "../Shared/Shared.css";
import {
  createUserDocumentFromAuth,
  getUserDocumentFromAuth,
  signInWithGooglePopup,
  signOutUser,
} from "../../Utils/firebase/firebase";
import { Link, useLocation } from "react-router-dom";
import { userReducer } from "./../../Redux/userReducer/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../Redux/userReducer/userActions";
import { getAllProducts } from "../../Redux/productReducer/productActions";
import { signOut } from "firebase/auth";

export const NavbarShared = () => { 
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

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
              <div className="ms-lg-4 ms-sm-0 mt-sm-2 productList position-absolute p-2">
                <div className="row">
                  <div className="col-4">
                    <img src={logo} className="img-fluid" alt="" />
                  </div>
                  <div className="col-2"></div>
                  <div className="col-5">
                      <h4 className="sub">Title</h4>
                      <p className="sub">State</p>
                      <p className="sub">$Price</p>
                      <button className="btn">Book</button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4">
                    <img src={logo} className="img-fluid" alt="" />
                  </div>
                  <div className="col-2"></div>
                  <div className="col-5">
                      <h4 className="sub">Title</h4>
                      <p className="sub">State</p>
                      <p className="sub">$Price</p>
                      <button className="btn">Book</button>
                  </div>
                </div>
              </div>
            </form>
            <ul className="navbar-nav gap-3">
              <Link to="/" className={`nav-brand me-2 ${isLinkActive("/") ? "active-link" : ""}`} onClick={() => setActiveLink("home")}>
                <p className="nav-link p-0 mt-2 " aria-current="page" aria-disabled="false" tabIndex="-1">
                  Home
                </p>
              </Link>
              <Link to="/destinations"  className={`nav-item ${isLinkActive("/destinations") ? "active-link" : ""}`} onClick={() => setActiveLink("destinations")}>
                <p className="nav-link p-0 mt-2" aria-disabled="true" tabIndex="-1">
                  Destinations
                </p>
              </Link>

              <Link to="/bookings" className={`nav-item ${isLinkActive("/bookings") ? "active-link" : ""}`} onClick={() => setActiveLink("bookings")}>
                <p
                  className="nav-link p-0 mt-2"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Bookings
                </p>
              </Link>
              <Link className="nav-item">
                <p className="nav-link p-0 mt-2" tabIndex="-1">
                  {isAuth && userDetails
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
                  onClick={async () => {
                    await signOutUser();
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
