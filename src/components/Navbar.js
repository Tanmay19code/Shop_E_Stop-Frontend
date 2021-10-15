import React, { useState } from "react";
import logo from "../images/shop_e_stop_logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const toggleMenu = () => {
    if (menuEnabled) {
      setMenuEnabled(false);
    } else {
      setMenuEnabled(true);
    }
  };
  const disableMenu = () => {
    if (menuEnabled) {
      setMenuEnabled(false);
    }
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/" onClick={disableMenu}>
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-ul">
          <li>
            <BiCategory className="category" />
          </li>
          <li>
            <Link to="/cart" onClick={disableMenu}>
              <GiShoppingCart className="cart" />
            </Link>
          </li>
          <li>
            <AiOutlineUser onClick={toggleMenu} className="user" />
          </li>
        </ul>

        <div className="navbar-search">
          <IoIosSearch className="navbar-search-logo" />
          <input
            className="navbar-searchbar"
            placeholder="Search for products....."
          />
        </div>
        <div
          className={`navbar-profile-menu-${
            menuEnabled ? "enabled" : "disabled"
          }`}
        >
          <ul>
            <li>
              <div className="navbar-profile-menu-header">
                <div>
                  <ul>
                    <li id="username">Tanmay M.</li>
                    <li id="useremail">tanmaymutalik2002@gmail.com</li>
                  </ul>
                </div>
                <div>
                  <AiOutlineUser
                    onClick={toggleMenu}
                    id="menu_user"
                    className="user"
                  />
                </div>
              </div>
            </li>
            <li>
              <Link to="myprofile" onClick={disableMenu}>
                <div className="navbar-profile-menu-item">
                  <p>My Profile</p>
                </div>
              </Link>
              <Link to="myorders" onClick={disableMenu}>
                <div className="navbar-profile-menu-item">
                  <p>My Orders</p>
                </div>
              </Link>
              <Link to="mycoupons" onClick={disableMenu}>
                <div className="navbar-profile-menu-item">
                  <p>My Coupons</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
