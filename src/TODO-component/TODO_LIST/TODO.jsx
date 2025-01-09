import React from "react";
import "./TODO.css";
const TODO = () => {
  return (
    <div className="main_todo">
      <h1>TODO LIST </h1>
      <div className="box">
        <input type="text" />
        <button>ADD</button>
      </div>  
    </div>
  );
};

export default TODO;
