import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import laptop from "../sampleData/laptop.js";

function CardContainer(props) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const handleViewMore =()=>{
    setEndIndex(endIndex+6)
  }
  return (
    <div>
      <div className="card-container-holder">
        <div className="card-container-title">{props.title}</div>
        <hr />
        <div className="card-container-cards">
          {laptop.slice(startIndex, endIndex).map((item) => {
            return (
              <>
                <Link to="/product" target="_blank">
                  <Card
                    name={item.name}
                    price={item.price}
                    image_main={item.image_main}
                    key={item.id}
                  />
                </Link>
              </>
            );
          })}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
        <p id="view-more" onClick={handleViewMore}>View More</p>
      </div>
    </div>
  );
}

CardContainer.defaultProps = {
  title: "Recommendations",
};
export default CardContainer;
