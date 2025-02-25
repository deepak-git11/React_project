import React from "react";
import "./Home.css";
import p from "./Day 3.jpeg";
const Home = () => {
  return (
    <div id="Home_main">
      <div className="lft">
        <h2>Welcome to the User Management System! </h2>
        <h2> Seamlessly manage user data and streamline </h2>
        <h2> your workflow with our intuitive interface. </h2>
        <h2> Enjoy your experience! 😊 </h2>
      </div>
      <div>
        <img id="pic" src={p} alt="user"/>
      </div>
    </div>
  );
};

export default Home;
