import React, { useState, useEffect } from "react";
import logo from "../images/shop_e_stop_logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions.js";

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
  const dispatch = useDispatch(null);
  const logout = () => {
    // useEffect(() => {
    dispatch(logout())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // }, []);
  };

  const [categoryVisible, setCategoryVisible] = useState(false);
  const toggleCategory = () => {
    if (categoryVisible) {
      setCategoryVisible(false);
    } else {
      setCategoryVisible(true);
    }
  };
  const disableCategory = () => {
    setCategoryVisible(false);
  };
  return (
    <div>
      <div className="navbar">
        <Link to="/" onClick={disableMenu}>
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-ul">
          {/* <li>
            <BiCategory className="category" onClick={toggleCategory}/>
          </li> */}

          <li>
            <Link to="/cart" onClick={disableMenu}>
              <GiShoppingCart className="cart" />
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={disableMenu}>
              <FiLogIn className="cart" />
              {/* <FiLogOut className="cart"/> */}
              {/* <GiShoppingCart className="cart" /> */}
            </Link>
          </li>
          <li>
            <AiOutlineUser onClick={toggleMenu} className="user" />
          </li>
        </ul>

        <div className="navbar-search">
          <form>
            <IoIosSearch className="navbar-search-logo" type="submit" />
            <input
              className="navbar-searchbar"
              placeholder="Search for products....."
            />
          </form>
        </div>
        <div
          className={`navbar-profile-menu-${
            menuEnabled ? "enabled" : "disabled"
          }`}
        >
          {/* <OutsideClickHandler onOutsideClick={disableMenu}>
            <ul>
              <li>
                <div className="navbar-profile-menu-header">
                  <div>
                    <ul>
                      <li id="username">No User</li>
                      <li id="useremail">Please, Log in to proceed</li>
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
                <Link to="/login" onClick={disableMenu}>
                  <div className="navbar-profile-menu-item">
                    <p>Login</p>
                  </div>
                </Link>
              </li>
            </ul>
          </OutsideClickHandler> */}

          <OutsideClickHandler onOutsideClick={disableMenu}>
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
                <Link to="#" onClick={logout}>
                  <div className="navbar-profile-menu-item">
                    <p>Logout</p>
                  </div>
                </Link>
              </li>
            </ul>
          </OutsideClickHandler>
        </div>
      </div>
      {categoryVisible ? <Category /> : <></>}
    </div>
  );
}

export default Navbar;
