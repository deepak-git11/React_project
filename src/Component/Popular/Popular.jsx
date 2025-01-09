import React from "react";
import "./Popular.css";
import Data from "../Data/Data";
import Items from "../Item/Items";
const Popular = () => {
  return (
    <div className="popular_main">
      <h1>WOMENS POPULAR COLLECTIONS </h1>
      <hr />
      <div className="popular_content">
        {Data.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
