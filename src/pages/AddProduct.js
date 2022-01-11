import React, { useState } from "react";
// import laptop from "../images/laptop1.jpg";
import uploadImage from "../images/upload.png";
// import { AiFillStar } from "react-icons/ai";

const AddProduct = () => {
  var loadFile = function (event) {
    var image = document.getElementById("output-display");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <div className="page-container product-container">
      <div className="product-container-left">
        <div className="product-header">
          <div className="product-image-div">
            <img src={uploadImage} id="output-display" alt="Upload photo" />
            <br />
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              onChange={loadFile}
            />
            {/* <p className ="product-image-price mobile-display">₹65,000</p> */}
            <input
              className="mobile-display"
              type="number"
              placeholder="Enter amount in INR"
            />
          </div>
          <div className="product-info">
            <div className="product-title">
              {/* <p id="product-info-heading">Dell Inspiron 352</p> */}
              <input
                id="product-info-heading-input"
                placeholder="Enter the product title"
              />
              {/* <div className="rating"> */}
              {/* <AiFillStar /> */}
              {/* <p>4.2</p> */}
              <input type="number" placeholder="ranking" id="ranking-input" />
              {/* </div> */}
            </div>
            <div className="product-title-description mobile-display">
              <ul>
                <li>Core i3 10th Gen</li>
                <li>8 GB/1 TB HDD</li>
                <li>Windows 10 Home</li>
                <li>15.6 inch, Black, With MS Office</li>
              </ul>
            </div>

            {/* <p className="product-image-price laptop-display">₹65,000</p> */}
            <input
              className="laptop-display price-input"
              type="number"
              placeholder="Enter amount in INR"
            />
            <div className="product-title-buttons"></div>
          </div>
        </div>
      </div>
      <div className="product-container-right">
        <div className="laptop-display">
          <textarea
            cols="60"
            rows="8"
            placeholder="Enter brief description here"
            maxLength="100"
            className="description-input"
          />
        </div>
        <div className="product-details-description">
          <hr />
          <p id="product-details-header">Highlights :</p>
          <div className="highlights">
            <input id="highlight1" />
            <br />
            <input id="highlight2" />
            <br />
            <input id="highlight3" />
            <br />
            <input id="highlight4" />
            <br />
            <input id="highlight5" />
            <br />
            <br />
          </div>
        </div>

        <div className="product-details-description">
          <hr />
          <p id="product-details-header">Specifications :</p>
          <div className="add-specifications">
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            <div className="add-specifications-item">
              <input className="add-specifications-item-key" />
              <input className="add-specifications-item-value" />
            </div>
            {/* <input className="add-specifications-button" type="button" value="+"></input> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
