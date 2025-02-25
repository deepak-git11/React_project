import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
const Navbar = () => {
  const [menu, setmenu] = useState("");
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="" />
        <p>USER MANAGEMENT SITE</p>
      </div>
      <div className="nav-bar">
        <li>
          <ul
            onClick={() => {
              setmenu("");
            }}
          >
            <Link to="/">Home</Link> {menu === "" ? <hr /> : <></>}
          </ul>
          <ul
            onClick={() => {
              setmenu("shop");
            }}
          >
            <Link to="/shop">SHOP</Link> {menu === "shop" ? <hr /> : <></>}
          </ul>
          <ul
            onClick={() => {
              setmenu("api");
            }}
          >
            <Link to="/api"> USER</Link> {menu === "api" ? <hr /> : <></>}
          </ul>
         
          {/* <ul
            onClick={() => {
              setmenu("kids");
            }}
          >
            <Link to="/kids">KIDS</Link>
            {menu === "kids" ? <hr /> : <></>}
          </ul> */}
        </li>
      </div>
      <div className="login">
        <button>LOGIN</button>
        {menu === "shop" ? <button> CART</button> : " "}
      </div>
    </div>
  );
};

export default Navbar;
