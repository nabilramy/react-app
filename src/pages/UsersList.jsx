import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addUser.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Table from "../components/Table";
import search from "../components/images/search.svg";
import home from "../components/images/home-2.svg";
import database from "../components/images/database.svg";
import chart from "../components/images/line-chart.svg";
import upload from "../components/images/upload.svg";
import users_icon from "../components/images/users.svg";
import settings from "../components/images/settings.svg";
import image from "../components/images/image1.svg";
import calendar from "../components/images/calendar.svg";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";

const UserList = ({ id, setId }) => {
  const navigate = useNavigate();
  const [showPopUP, setShowPopUP] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchQueries, setSearchQueries] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://test.helpmytoken.com/api/users"
      );
      setUsers(data.payload);
    };
    getUsers();
  }, []);

  const handlesearch = () => {
    if (
      searchQueries.firstName ||
      searchQueries.lastName ||
      searchQueries.email
    ) {
      const filtered = users.filter((user) => {
        return (
          user.first_name
            .toLowerCase()
            .includes(searchQueries.firstName.toLowerCase()) &&
          user.last_name
            .toLowerCase()
            .includes(searchQueries.lastName.toLowerCase()) &&
          user.email.toLowerCase().includes(searchQueries.email.toLowerCase())
        );
      });
      setUsers(filtered);
    } else {
      const getUsers = async () => {
        const { data } = await axios.get(
          "https://test.helpmytoken.com/api/users"
        );
        setUsers(data.payload);
      };
      getUsers();
    }
  };

  const handleOnChange = (e) => {
    setSearchQueries({
      ...searchQueries,
      [e.target.name]: e.target.value,
    });

    return handlesearch();
  };

  const handleEditUser = (id) => {
    setId(id);
    navigate("/edit");
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    axios.delete(`https://test.helpmytoken.com/api/users/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleShowPopUP = (id) => {
    setShowPopUP(true);
    setId(id);
  };

  const closePopUp = () => {
    setShowPopUP(false);
  };
  return (
    <>
      {showPopUP && (
        <PopUp
          message="Are sure to delete this item?"
          btn={"<Input> hello </Input>"}
          handleDeleteUser={handleDeleteUser}
          id={id}
          closePopUp={closePopUp}
        />
      )}
      <Navbar />
      <div className="main_body">
        <Sidebar
          icons={[
            search,
            home,
            database,
            chart,
            upload,
            image,
            calendar,
            users_icon,
            settings,
          ]}
        />
        <div className="user__details__main">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              borderBottom: "2px solid #7a7a7a",
              paddingBottom: "1rem",
            }}
          >
            <div className="new__user__details">
              <div className="user__header__list">
                <h1>Search</h1>
              </div>
              <div className="user_Inputs_list">
                <Input
                  name="firstName"
                  type="text"
                  onChange={(e) => handleOnChange(e)}
                  placeholder="First Name"
                  requierdOption="required"
                />
                <Input
                  name="lastName"
                  type="text"
                  onChange={(e) => handleOnChange(e)}
                  placeholder="Last Name"
                  requierdOption="required"
                />
                <Input
                  name="email"
                  type="email"
                  onChange={(e) => handleOnChange(e)}
                  placeholder="Email"
                  requierdOption="required"
                />
              </div>
            </div>
          </div>
          <h1 style={{ color: "#606060", margin: "1rem 0" }}>Users</h1>
          <Table
            handleEditUser={handleEditUser}
            users={users}
            handleShowPopUP={handleShowPopUP}
          />
        </div>
      </div>
    </>
  );
};

export default UserList;
