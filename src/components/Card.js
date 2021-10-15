import React from 'react'
import speaker from '../images/speaker.jpg'

function Card() {
    return (
        <div>
            <div className="card-body">
                <div className="card-image">
                    <img src={speaker} alt="speaker" />
                </div>
                <div className="card-details">
                    <p id="product-name">SONY D4 speaker</p>
                    <p id="product-price">9,000 ₹</p>
                </div>
            </div>
        </div>
    )
}

export default Card
