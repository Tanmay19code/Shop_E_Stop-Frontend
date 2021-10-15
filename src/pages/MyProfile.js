import React, { useState } from "react";
import ProfileDetails from "../components/ProfileDetails";
import { Link } from "react-router-dom";

function MyProfile() {
  const [disabled, setDisabled] = useState(false);

  const toggleVisibility = () => {
    if (disabled) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="page-heading">
          <p>My Profile</p>
          <hr />
        </div>
        <div className="profile-holder">
          <p onClick={toggleVisibility} className="profile-holder-header">
            Home ▼
          </p>
          <div className={`${disabled ? "disabled" : "profile-holder-list"}`}>
            <div className="profile-holder-item">
              <p id="profile-item-title">Username : </p>
              <div>
                <ProfileDetails content="Tanmay Mutalik" />
              </div>
            </div>
            <div className="profile-holder-item">
              <p id="profile-item-title">Email : </p>
              <div>
                <ProfileDetails content="tanmaymutalik02@gmail.com" />
              </div>
            </div>
            <div className="profile-holder-item">
              <p id="profile-item-title">Mobile : </p>
              <div>
                <ProfileDetails content="9167136030" />
              </div>
            </div>
            <div className="profile-holder-item">
              <p id="profile-item-title">Address : </p>
              <div>
                <ProfileDetails
                  content={
                    "A3/105, Suryamukhi bldg, LokSurabhi, Near  Patri Pool, Kalyan (W), Thane, Maharashtra. 421301 "
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-address-button">
          <Link to="/addaddress">
            <button>Add Address</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
