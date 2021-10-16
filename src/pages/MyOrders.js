import React from "react";
import OrderItem from "../components/OrderItem";

function MyOrders() {
  return (
    <div className="page-container">
      <div className="page-heading page-heading-flex">
        <p>My Orders</p>
        <div className="order-searchbar">
          <input type="text" placeholder="Search for order" />
        </div>
      </div>
      <hr />
      <div className="order-holder">
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
      </div>
    </div>
  );
}

export default MyOrders;
