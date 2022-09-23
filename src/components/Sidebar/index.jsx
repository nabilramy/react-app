import React from "react";
import "./sidebar.css";

const Sidebar = ({ icons }) => {
  return (
    <nav className="sidebar">
      <ul>
        {icons.map((item, index) => {
          return (
            <li>
              <img key={item} src={item} alt="O" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
