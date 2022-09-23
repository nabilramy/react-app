import React from "react";
import TableRow from "../TableRow";
import "./table.css";
const Table = ({ users, handleEditUser, handleDeleteUser, handleShowPopUP }) => {
  return (
    <div className="table__container">
      {users ? (
        users.map((user) => {
          return (
            <TableRow
              user={user}
              handleEditUser={handleEditUser}
              handleDeleteUser={handleDeleteUser}
              handleShowPopUP={handleShowPopUP}
            />
          );
        })
      ) : (
        <h1>No Users Found!</h1>
      )}
    </div>
  );
};

export default Table;
