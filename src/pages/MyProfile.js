import React from "react";
import ProfileDetails from "../components/ProfileDetails";

function MyProfile() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <p>My Profile</p>
        <hr />
      </div>
      <div className="profile-holder ">
          <ProfileDetails content="Tanmay Mutalik"/>
          <ProfileDetails/>
          <ProfileDetails/>
          <ProfileDetails/>
      </div>
    </div>
  );
}

export default MyProfile;
