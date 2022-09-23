import React from "react";
import "./tableRow.css";
import edit from "../images/edit-2.svg";
import trash from "../images/trash.svg";
const TableRow = ({ user, handleEditUser, handleDeleteUser, handleShowPopUP }) => {
  return (
    <div key={user.id} className="table_row">
      <p>{user.username}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.email}</p>
      <div className="actions">
        <img onClick={() => handleEditUser(user.id)} src={edit} alt="edit" />
        <img
          onClick={() => handleShowPopUP(user.id)}
          src={trash}
          alt="trash"
        />
      </div>
    </div>
  );
};

export default TableRow;
