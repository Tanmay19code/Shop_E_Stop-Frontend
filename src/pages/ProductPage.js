import React from "react";
import laptop from "../images/laptop1.jpg";
import { AiFillStar } from "react-icons/ai";

function ProductPage() {
  return (
    <div className="page-container">
      <div className="product-header">
        <div className="product-image-div">
          <img src={laptop} alt="speaker" />
          <p>₹65,000</p>
        </div>
        <div className="product-info">
          <div className="product-title">
            <p id="product-info-heading">Dell Inspiron 352</p>
            <div className="rating">
              <AiFillStar />
              <p>4.2</p>
            </div>
          </div>
          <div className="product-title-description">
            <ul>
              <li>Core i3 10th Gen</li>
              <li>8 GB/1 TB HDD</li>
              <li>Windows 10 Home</li>
              <li>15.6 inch, Black, With MS Office</li>
            </ul>
          </div>
          <div className="product-title-buttons">
            <button id="add-to-cart-button">Add to Cart</button>
            <button id="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="product-expected-delivery">
        <hr />
        <p id="product-details-header">Expected Delivery :</p>
        <p id="product-details-delivery">
          Delivery expected by <strong>Tue, 10th Aug</strong>
        </p>
        <p id="product-details-delivery">Delivery Charges: ₹100</p>
      </div>
      <div className="product-details-description">
        <hr />
        <p id="product-details-header">Highlights :</p>
        <ul>
          <li>Pre-installed Genuine Windows 10 OS</li>
          <li>Preloaded with MS Office</li>
          <li>Light Laptop without Optical Disk Drive</li>
          <li>15.6 inch</li>
        </ul>
      </div>
      <div className="product-details-specifications">
        <hr />
        <p id="product-details-header">Specifications :</p>
        <ul id="product-specification-ul">
          <li>
            General
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Sales Package</p>
                <p className="specification-individual-right">
                  Laptop, Power Adaptor, User Guide, Warranty Documents
                </p>
              </li>
              <li>
                <p className="specification-individual-left">Model Number</p>
                <p className="specification-individual-right">Inspiron 3501</p>
              </li>
              <li>
                <p className="specification-individual-left">Part Number</p>
                <p className="specification-individual-right">
                  D560288WIN9S/D560365WIN9
                </p>
              </li>
              <li>
                <p className="specification-individual-left">Model Name</p>
                <p className="specification-individual-right">INSPIRON 3501</p>
              </li>
              <li>
                <p className="specification-individual-left">Series</p>
                <p className="specification-individual-right">INSPIRON</p>
              </li>
              <li>
                <p className="specification-individual-left">Color</p>
                <p className="specification-individual-right">Black</p>
              </li>
              <li>
                <p className="specification-individual-left">Type</p>
                <p className="specification-individual-right">Laptop</p>
              </li>
              <li>
                <p className="specification-individual-left">Suitable For</p>
                <p className="specification-individual-right">
                  Processing & Multitasking
                </p>
              </li>
              <li>
                <p className="specification-individual-left">Battery Backup</p>
                <p className="specification-individual-right">Upto 6hrs</p>
              </li>
              <li>
                <p className="specification-individual-left">
                  MS Office Provided
                </p>
                <p className="specification-individual-right">Yes</p>
              </li>
            </ul>
          </li>
          <li>
            Processor And Memory Features
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Processor Brand</p>
                <p className="specification-individual-right">Intel</p>
              </li>
              <li>
                <p className="specification-individual-left">Processor Name</p>
                <p className="specification-individual-right">Core i3</p>
              </li>
              <li>
                <p className="specification-individual-left">Processor Generation</p>
                <p className="specification-individual-right">10th Gen</p>
              </li>
              <li>
                <p className="specification-individual-left">SSD</p>
                <p className="specification-individual-right">No</p>
              </li>
              <li>
                <p className="specification-individual-left">RAM</p>
                <p className="specification-individual-right">8 GB</p>
              </li>
              <li>
                <p className="specification-individual-left">RAM Type</p>
                <p className="specification-individual-right">DDR4</p>
              </li>
              <li>
                <p className="specification-individual-left">HDD Capacity</p>
                <p className="specification-individual-right">1 TB</p>
              </li>
              <li>
                <p className="specification-individual-left">Graphic Processor</p>
                <p className="specification-individual-right">Intel Integrated Intel Integrated UHD</p>
              </li>
            </ul>
          </li>
          <li>
            Operating
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Operating System</p>
                <p className="specification-individual-right">Windows 10 Home</p>
              </li>
              <li>
                <p className="specification-individual-left">System Architecture</p>
                <p className="specification-individual-right">64 bit</p>
              </li>
            </ul>
          </li>
          <li>
            Display And Audio Features
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Touchscreen</p>
                <p className="specification-individual-right">No</p>
              </li>
              <li>
                <p className="specification-individual-left">Screen Size</p>
                <p className="specification-individual-right">39.62 cm (15.6 inch)</p>
              </li>
              <li>
                <p className="specification-individual-left">Screen Resolution</p>
                <p className="specification-individual-right">1980 x 1080 pixel</p>
              </li>
            </ul>
          </li>
          <li>
            Connectivity Features
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Bluetooth</p>
                <p className="specification-individual-right">v5.0</p>
              </li>
            </ul>
          </li>
          <li>
            Additional Features
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Disk Drive</p>
                <p className="specification-individual-right">Not Available</p>
              </li>
            </ul>
          </li>
          <li>
            Warranty
            <ul id="specification-individual">
              <li>
                <p className="specification-individual-left">Warranty Summary</p>
                <p className="specification-individual-right">1 Year Limited Hardware Warranty, In Home Service After Remote Diagnosis - Retail</p>
              </li>
              <li>
                <p className="specification-individual-left">Warranty Service Type</p>
                <p className="specification-individual-right">Onsite</p>
              </li>
              <li>
                <p className="specification-individual-left">Covered in Warranty</p>
                <p className="specification-individual-right">Manufacturing Defects</p>
              </li>
              <li>
                <p className="specification-individual-left">Not Covered in Warranty</p>
                <p className="specification-individual-right">Physical Damage</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
