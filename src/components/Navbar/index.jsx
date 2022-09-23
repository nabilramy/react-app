import React from "react";
import "./navbar.css";
import image from "../images/image-line.svg";
import user from "../images/user.svg";
import menu from "../images/menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <img src={menu} alt="" />
      </div>
      <div className="navBar_right">
        <img src={image} alt="mountain" />
        <div className="user__info">
          <div className="name">
            <h1>Jack MOORE</h1>
            <p>Account settings</p>
          </div>

          <div className="circle">
            <img src={user} alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
