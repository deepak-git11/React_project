import React from "react";
import menstyle from "../Images/mens_style.png";
import "./First.css";
const First = () => {
  return (
    <div className="main_body">
      <div className="left">
        <h5>Welcome to Your Ultimate Shopping Destination</h5>
        <h1>Discover Our Exclusive New Collections</h1>
        <p>
          Unveil the latest trends and timeless classics curated just for you.
        </p>
        <button>Explore the Latest Collections &gt;</button>
      </div>
      <div className="right">
        <img src={menstyle} alt="" />
      </div>
    </div>
  );
};

export default First;
