import React from "react";
import { BsGoogle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import '../components/login.css'


const Login = () => {
  return (
    <>
      <br></br>
      <div className="login-wrapper">
        <div className="Login-container">
          <h3 className="login-h3">
            Login with Your account
          </h3>
          <br></br>
          <br></br>
          <div className="login-mid-container">
            <div className="login-border">
              <label>Name</label>
              <input className="input"
                type={"text"}
                placeholder=""
                style={{ border: "none", marginLeft: "30px" }}
                />
            </div>
            <br />
            <div className="login-border">
              <label>Email</label>
              <input
                className="input"
                type={"text"}
                placeholder="Name"
                style={{ border: "none", marginLeft: "30px" }}
              />
            </div>
            <div className="login-border">
              <label>Password</label>
              <input
                className="input"
                type={"password"}
                placeholder="******"
                style={{ border: "none", marginLeft: "20px" }}
              />
            </div>
          </div>
          <br></br>
          <div className="login-btn-cont">
            <button
              style={{
                backgroundColor: "#43D5CB",
              
                border: "none",
              
              }}
            >
              Login
            </button>
          </div>

          <br></br>
          <div
           className="login-btn-cont2"
          >
            <BsGoogle style={{ color: "red" }} />
            <button
              style={{
                backgroundColor: "lightgray",   
                border: "none",
              }}
            >
              Login with Google
            </button>
          </div>
          <br />
          <div className="login-bottom">
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              if you don't have an account?
              <span style={{ fontWeigh: "bold", }}>
                {" "}
                <NavLink to="/profile">Create an account</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Login;
