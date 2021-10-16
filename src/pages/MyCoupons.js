import React from "react";
import Coupon from "../components/Coupon";

function MyCoupons() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <p>My Coupons</p>
        <hr />
      </div>
      <p className="coupon-header">Valid Coupons :</p>
      <div className="coupon-holder">
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
      </div>
      <p className="coupon-header">Expired Coupons :</p>
      <div className="coupon-holder">
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
          <Coupon/>
      </div>
    </div>
  );
}

export default MyCoupons;
