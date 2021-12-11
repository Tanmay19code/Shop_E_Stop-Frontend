import React from "react";
import logo from "../images/shop_e_stop_logo_2.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <form action="" method="">
          <img src={logo} alt="Logo" className="form-logo" />
          <input type="email" placeholder="Enter your email address" />
          <input type="password" placeholder="Enter your password" />
          <div className="form-forget-password">
            <p>Forget your password?</p>
          </div>
          {/* <br /> */}
          <input type="button" value="LOGIN" id="login-button" />
          <Link to="/signup"><p className="create-account-button">New here? Create Account</p></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
