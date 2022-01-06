import React,{ useState} from "react";
import logo from "../images/shop_e_stop_logo_2.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import refreshTokenSetup from '../utils/refreshToken';
import {login} from '../redux/actions/authActions.js'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch(null);
  const history = useHistory();
   const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password)).then(() => {
      history.push('/');
      setTimeout(() => {
        window.location.reload(false);
      }, 3);
    });
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <form  method="POST" onSubmit={(e) => onSubmit(e)}>
          <img src={logo} alt="Logo" className="form-logo" />

          <input type="email" placeholder="Enter your email address" onChange={(e) => onChange(e)} name='email' required value={formData.email}/>
          
          <input type="password" placeholder="Enter your password" onChange={(e) => onChange(e)}  name='password' value={formData.password} required />
          <div className="form-forget-password">
            <p>Forget your password?</p>
          </div>
          {/* <br /> */}
          <input type="submit" value="LOGIN" id="login-button" />
          <Link to="/signup" className="create-account-button-link"><p className="create-account-button">New here? Create Account</p></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
