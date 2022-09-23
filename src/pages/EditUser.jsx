import React, { useState, useEffect } from "react";
import "./addUser.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import search from "../components/images/search.svg";
import home from "../components/images/home-2.svg";
import database from "../components/images/database.svg";
import chart from "../components/images/line-chart.svg";
import upload from "../components/images/upload.svg";
import users from "../components/images/users.svg";
import settings from "../components/images/settings.svg";
import axios from "axios";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";
// const curl = require("curl");

const EditUser = ({ id }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `https://test.helpmytoken.com/api/users/${id}`
      );
      setUser(data.payload);
    };
    getUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const from = new FormData();
  from.append("username", test);
  from.append("first_name", user.first_name);
  from.append("last_name", user.last_name);
  from.append("email", user.email);
  from.append("password", user.password);
  from.append("avatar", user.avatar);

  console.log(from, 123123);
  const editUser = async (e) => {
    // const data = new FormData();
    // data.append("myFile", myFile);
    // data.append("otherStuff", "stuff from a text input");
    // await fetch(`https://test.helpmytoken.com/api/${id}`, {
    //   method: "POST",
    //   body: from,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    const form = new FormData();
    form.append("userName", "milan");

    const response = await axios({
      method: "post",
      url: `https://test.helpmytoken.com/api/${id}`,
      data: form,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    console.log(response, "response");
  };

  return (
    <>
      <Navbar />
      <div className="main_body">
        <Sidebar
          icons={[search, home, database, chart, upload, users, settings]}
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
              <div className="user__header">
                <h1>New User Details</h1>
              </div>
              <div className="user_Inputs">
                <Input
                  name="username"
                  type="text"
                  placeholder="Username"
                  defaultValue={user.username}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  defaultValue={user.first_name}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user.email}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  defaultValue={user.password}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  defaultValue={user.last_name}
                  onChange={(e) => handleChange(e)}
                />
                <div className="radio__btns">
                  <input
                    type="radio"
                    name="role"
                    id="Manager"
                    value="Manager"
                  />
                  <label htmlFor="Manager">Manager</label>
                  <input
                    type="radio"
                    name="role"
                    id="Employee"
                    value="Employee"
                  />
                  <label htmlFor="Employee">Employee</label>
                </div>
              </div>
            </div>
            <div className="upload_image">
              <div className="user__header">
                <h1>Profile Picture</h1>
              </div>
              <div className="img__container">
                <img src={user.avatar} alt="" />
              </div>
              <Input
                type="url"
                name="avatar"
                onChange={(e) => handleChange(e)}
                placeholder="Select Image"
                style={{
                  border: "none",
                  backgroundColor: "#f9f9f9",
                  width: "100%",
                  height: "50px",
                  textAlign: "center",
                }}
                className="img__url"
              />
            </div>
          </div>
          <div className="buttons__container">
            <Input
              type="button"
              value="Edit User"
              onClick={(e) => editUser(e)}
              style={{
                backgroundColor: "#606060",
                border: "none",
                color: "white",
              }}
            />
            <Input
              type="button"
              value="Cancel"
              onClick={() => navigate("/list")}
              style={{
                backgroundColor: "#a7a7a7",
                border: "none",
                color: "#606060",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
