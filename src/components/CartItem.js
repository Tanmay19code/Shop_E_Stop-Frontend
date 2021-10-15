import React, { useState } from "react";
import speaker from "../images/speaker.jpg";
import { MdDelete } from "react-icons/md";

function CartItem(props) {
  const [items, setItems] = useState(1);
  const [disabled, setDisabled] = useState(props.disabled);
  // let disabled = props.disabled;
  const decreaseCount = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  const increaseCount = () => {
    if (items < 5) {
      setItems(items + 1);
    } else {
      alert(
        "You can buy maximum 5 pieces at a time.\nFor more info, contact shop.e.stop@gmail.com "
      );
    }
  };

  const deleteItem=()=>{
    setDisabled(true);
    // disabled=true;
  }
  return (
    <div>
      <div className={`${disabled? "disabled": "cart-item"}`}>
        <div className="cart-item-image">
          <img src={speaker} alt="speaker" />
        </div>
        <div className="cart-item-details">
          <div id="cart-item-heading">SONY D4 speakers</div>
          <div id="cart-item-price">₹9,000</div>
          <div className="cart-item-qty">
            <p>Qty: </p>
            <div id="cart-item-qty-holder">
              <div
                onClick={decreaseCount}
                className="cart-item-qty-contents"
                id="cart-item-qty-btn1"
              >
                <p>-</p>
              </div>
              <div
                className="cart-item-qty-contents"
                id="cart-item-qty-display"
              >
                <p>{items}</p>
              </div>
              <div
                onClick={increaseCount}
                className="cart-item-qty-contents"
                id="cart-item-qty-btn2"
              >
                <p>+</p>
              </div>
            </div>
            <div className="cart-delete-logo" onClick={deleteItem} >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.defaultProps ={
  disabled: false,
}

export default CartItem;
