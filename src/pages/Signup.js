import React from "react";
import logo from "../images/shop_e_stop_logo_2.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="page-container">
      <div className="form-container-signup">
        <form action="" method="">
          <img src={logo} alt="Logo" className="form-logo" />
          <div className="form-body">
            <div className="form-body-left">
              <input
                type="text"
                autocomplete="abcdef"
                placeholder="Enter your name"
              />
              <input
                type="email"
                autocomplete="abcdef"
                placeholder="Enter your email address"
              />
              <input
                type="number"
                autocomplete="abcdef"
                placeholder="Enter your mobile number"
              />
              <input type="password" placeholder="Enter your password" />
              <input type="password" placeholder="Re-enter your password" />
            </div>
            <div className="form-body-right">
              <div className="signup-address-holder">
                <div className="signup-address-holder-input">
                  <input
                    type="address"
                    placeholder="Flat no., Building name, Street"
                  />
                </div>
                <div className="signup-address-holder-input">
                  <input
                    type="address"
                    placeholder="Locality, Area, town /taluka /village"
                  />
                </div>
                <div className="signup-address-holder-input">
                  <input type="text" placeholder="City"></input>
                  <input type="text" className="signup-address-holder-input-2" placeholder="District"></input>
                  <input type="text" placeholder="State"></input>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="SIGNUP"
            id="signup-button"
            className="signup-button-class"
          />
          <Link to="/login" className="create-account-button-link">
            <p className="create-account-button">Already Registered? Login</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
