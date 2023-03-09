import React from "react";
import { BsGoogle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import '../components/create.css'

function Create() {
  return (
    <>
     
     
      <div className="create-wrapper">
        <div className="create-container">
          <h3
           className="create-h3"
          >
            Create new account
          </h3>
          <br></br>
          <br></br>
          <div className="create-mid-container">
            <div className="create-border" >
              <label style={{ fontWeight: "300" }}>Name</label>
              <input
                type={"text"}
                placeholder=""
                style={{ border: "none", marginLeft: "30px" }}
              />
            </div>
            <br />
            <div className="create-border">
              <label style={{ fontWeight: "300" }}>Email</label>
              <input
                type={"text"}
                placeholder="Name"
                style={{ border: "none", marginLeft: "30px" }}
              />
            </div>
            <br />
            <div className="create-border">
              <label style={{ fontWeight: "300" }}>Password</label>
              <input
                type={"password"}
                placeholder="Name"
                style={{ border: "none", marginLeft: "20px" }}
              />
            </div>
            <br />
            <div className="create-border">
              <label style={{ fontWeight: "300", textAlign: "left" }}>
                Password
              </label>
              <input
                type={"password"}
                placeholder="******"
                style={{ border: "none", marginLeft: "20px" }}
              />
            </div>
          </div>
          <br></br>
          <div
           className="create-btn-cont"
            style={{
              backgroundColor: "#43D5CB",
             
              border: "none",
              
            }}
          >
            <button>
              Create account
            </button>
          </div>

          <br></br>
          <div
           className="create-btn-cont2"
           
          >
         
          
          <button className="button"
         
              
            ><BsGoogle style={{ color: "red",marginRight:"4px" }} />
               Sign up with Google
          </button>
          </div>
          <br />
          <div>
            <p style={{ textAlign: "left", }}>
              if you already have an account?
              <span style={{ fontWeigh: "bold", fontSize: "16px" }}>
                {" "}
                <NavLink to="/profile/login">Login Here</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
