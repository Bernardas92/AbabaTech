import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default (props) => {
  const navigate = useNavigate();

  const onLogout = () => {
    axios
      .get("/api/users/logout")
      .then(() => {
        props.handleLoginState(false);
        navigate("/");
      })
      .catch((e) => {
        console.log("Server is offline");
      });
  };

  return (
    <div className="header">
      <div className="ui menu">
        <Link className="item" to="/">
          Homepage
        </Link>
        <Link className="item" to="/howitworks">
          How it works
        </Link>
        <div className="right menu">
          {props.loggedIn === false && (
            <Link className="item" to="/registration">
              Sign up
            </Link>
          )}
          {props.loggedIn === false && (
            <Link className="item" to="/login">
              Log-In
            </Link>
          )}

          {props.userRole === 1 && (
            <Link className="item" to="/admin">
              Admin panel
            </Link>
          )}
          {props.loggedIn === true && (
            <button
              onClick={onLogout}
              style={{ border: "none" }}
              className="item"
              to="/"
            >
              Logout
            </button>
          )}
          {props.email && <div className="item">User: {props.email}</div>}
        </div>
      </div>
    </div>
  );
};
