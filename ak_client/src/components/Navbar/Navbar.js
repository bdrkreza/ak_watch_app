import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ak_logo from "../../assets/Image/ak-logo.png";
import authContext from "../../Context_api/Context/Auth/AuthContext";
import AddToCart from "../ShoppingCart/AddToCart";
import "./Navbar.css";
import NavUser from "./NavUser";

function Navbar() {
  const auth_context = useContext(authContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [showCart, setShowCart] = useState(false);
  const [userShow, setUserShow] = useState(false);
  const { isAuthenticated, logout, user } = auth_context;
  return (
    <>
      <nav className="navbar ">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={ak_logo} alt="logo" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>

            {isAuthenticated ? (
              <li class="nav-user">
                <Link
                  onClick={() => {
                    setUserShow(!userShow);
                  }}
                  class="nav-link nav-user-img"
                >
                  <img
                    src="https://img.icons8.com/dusk/100/000000/user-female-circle.png"
                    alt=""
                    class="user-avatar-md rounded-circle"
                  />
                </Link>
                <div className="navUser">
                  {userShow ? (
                    <div class=" nav-user-dropdown">
                      <NavUser user={user} logout={logout} />
                    </div>
                  ) : null}
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  exact
                  to="/signIn"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  login
                </Link>
              </li>
            )}
          </ul>

          <div
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <div id="badge">0</div>
            <i class="fas fa-shopping-cart shopping-cart-icon"></i>
          </div>

          {/* mobile toggle button */}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>

        <div className="d-flex  ms-auto">{showCart ? <AddToCart /> : null}</div>
      </nav>
    </>
  );
}

export default Navbar;
