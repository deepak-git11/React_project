import React from "react";
import "./ShopCat.css";
const ShopCat = ({ category }) => {
  return (
    <div className="mainbody">
      <h1>this is shop cart for {category}</h1>
    </div>
  );
};

export default ShopCat;
