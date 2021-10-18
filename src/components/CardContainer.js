import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardContainer(props) {
  return (
    <div>
      <div className="card-container-holder">
        <div className="card-container-title">{props.title}</div>
        <hr />
        <div className="card-container-cards">
          <Link to="/product">
            <Card />
          </Link>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p id="view-more">View More</p>
      </div>
    </div>
  );
}

CardContainer.defaultProps = {
  title: "Recommendations",
};
export default CardContainer;
