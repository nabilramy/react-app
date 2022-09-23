import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div>
      <input
      className="inputs"
       {...props}
      />
    </div>
  );
};

export default Input;
