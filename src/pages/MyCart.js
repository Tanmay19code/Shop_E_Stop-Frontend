import React from "react";
import CartItem from "../components/CartItem";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MyCart() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <p>My Cart</p>
        <hr />
      </div>
      <div className="cart-products-holder cart-item-holder">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-payment-distribution">
        <div className="cart-products-holder " id="cart-payment">
          <p id="payment-distribution-heading">Payment Distribution</p>
          <div className="payment-container">
            <div className="payment-item">
              <div id="payment-name">
                <p>SONY D4 Speaker</p>
              </div>
              <div id="payment-price">
                <p>1 x ₹9,000</p>
              </div>
            </div>
            <div className="payment-item">
              <div id="payment-name">
                <p>SONY D4 Speaker</p>
              </div>
              <div id="payment-price">
                <p>1 x ₹9,000</p>
              </div>
            </div>
            <div className="payment-item">
              <div id="payment-name">
                <p>SONY D4 Speaker</p>
              </div>
              <div id="payment-price">
                <p>1 x ₹9,000</p>
              </div>
            </div>
            <div className="payment-item">
              <div id="payment-name">
                <p>Total Amount:</p>
              </div>
              <div id="payment-price">
                <p>₹36,000</p>
              </div>
            </div>
            <div className="payment-item">
              <div id="payment-name">
                <p>Delivery Charges</p>
              </div>
              <div id="payment-price">
                <p>₹100</p>
              </div>
            </div>
            <div className="payment-item">
              <div id="payment-name" className="payment-grand-total">
                <p>GRAND TOTAL</p>
              </div>
              <div id="payment-price" className="payment-grand-total">
                <p>₹36,100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-products-holder " id="cart-payment">
          <div className="cart-delivery-container">
            <div className="cart-delivery-location-logo">
              <IoLocationOutline className="location-logo" />
            </div>
            <div className="cart-delivery-location-holder">
              <p id="cart-delivery-location-type">Home ▼</p>
              <hr />
              <p id="cart-delivery-location-address">
                A3/105, Suryamukhi bldg, LokSurabhi, Near Patri Pool,Kalyan (W)
                - 421301
              </p>
            </div>
          </div>
          <div className="cart-delivery-container">
            <button className="cart-button1">
              <Link to="/"> Explore</Link>
            </button>

            <button className="cart-button2">Proceed ✓</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
