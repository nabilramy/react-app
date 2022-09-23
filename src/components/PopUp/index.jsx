import React from "react";
import "./pop.css";

const PopUp = ({ message, btn, handleDeleteUser, id, closePopUp }) => {
  return (
    <div className="popUp">
      <h5>Warning!</h5>
      {message}
      {btn && (
        <div className="btns">
          <button onClick={() => handleDeleteUser(id)} className="del">
            Delete
          </button>
          <button onClick={() => closePopUp()} className="cancel">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default PopUp;
