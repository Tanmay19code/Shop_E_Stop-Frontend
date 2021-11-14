import React from 'react'
import speaker from '../images/speaker.jpg'

function Card(props) {
    return (
        <div>
            <div className="card-body">
                <div className="card-image">
                    {/* <img src="" alt="speaker" /> */}
                    <img src={props.image_main} alt="speaker" />
                </div>
                <div className="card-details">
                    {/* <p id="product-name">SONY D4 speaker</p>
                    <p id="product-price">9,000 ₹</p> */}
                    <p id="product-name">{props.name}</p>
                    <p id="product-price">{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
