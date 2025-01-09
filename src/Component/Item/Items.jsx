import React from "react";
import "./Item.css";
const Items = (props) => {
  return (
    <div className="item_main">
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <div className="price">
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Items;
