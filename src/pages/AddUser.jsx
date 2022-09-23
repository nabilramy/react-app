import React, { useState, useEffect } from "react";
import "./addUser.css";
import axios from "axios";
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
import PopUp from "../components/PopUp";
import { useNavigate } from "react-router-dom";


const AddUser = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    message: "",
    status: false,
  });

  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [url, setUrl] = useState("Slecet Image");

  const regexUserName = /^[a-zA-Z]+$/;
  const regexFirstName = /^[a-zA-Z]+$/;
  const regexlastName = /^[a-zA-Z]+$/;
  const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const validateInputs = (e) => {
    if (!regexUserName.test(user.username)) {
      setError({
        message: "Invalid Username",
        status: true,
      });
      return false;
    } else if (!regexFirstName.test(user.first_name)) {
      setError({
        message: "Invalid First Name",
        status: true,
      });
      return false;
    } else if (!regexlastName.test(user.last_name)) {
      setError({
        message: "Invalid Last Name",
        status: true,
      });
      return false;
    } else if (!regexEmail.test(user.email)) {
      setError({
        message: "Invalid Email",
        status: true,
      });
      return false;
    } else if (!regexPassword.test(user.password)) {
      setError({
        message: "Invalid Password",
        status: true,
      });
      return false;
    }
    return true;
  };

  const handlePost = async (e) => {
    if (validateInputs()) {
      const postNewUser = await axios.post(
        "https://test.helpmytoken.com/api/users",
        user
      );
    }
  };

  useEffect(() => {
    if (error.status) {
      setTimeout(() => {
        setError({
          message: "",
          status: false,
        });
      }, 5000);
    }
  }, [error]);

  const handleOnChangeAvatar = (e) => {
    setUser({ ...user, avatar: e.target.value });
    setUrl(e.target.value);
  };

  return (
    <>
      {error.status && <PopUp message={error.message} />}
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
                  type="text"
                  placeholder="Username"
                  onBlur={(e) => setUser({ ...user, username: e.target.value })}
                />
                <Input
                  type="text"
                  placeholder="First Name"
                  onBlur={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                />
                <Input
                  type="email"
                  placeholder="Email"
                  onBlur={(e) => setUser({ ...user, email: e.target.value })}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  onBlur={(e) => setUser({ ...user, password: e.target.value })}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  onBlur={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                />
                <div className="radio__btns">
                  <input
                    type="radio"
                    name="role"
                    id="Manager"
                    value="Manager"
                    // onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                  <label htmlFor="Manager">Manager</label>
                  <input
                    type="radio"
                    name="role"
                    id="Employee"
                    value="Employee"
                    // onChange={(e) => setUser({ ...user, role: e.target.value })}
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
                <img src={url} alt="" />
              </div>
              <Input
                type="url"
                placeholder={url}
                onMouseOver={(e) => setUrl("Past Url Here")}
                onChange={(e) => handleOnChangeAvatar(e)}
                style={{
                  border: "none",
                  backgroundColor: "#f9f9f9",
                  width: "100%",
                  height: "50px",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  marginTop: "1rem",
                }}
                className="img__url"
              />
            </div>
          </div>
          <div className="buttons__container">
            <Input
              type="button"
              value="Add User"
              onClick={(e) => handlePost(e)}
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

export default AddUser;
