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
          
          <div className="create-mid-container">
            <div className="create-border" >
              <label style={{ fontWeight: "300", paddingRight:"14px" }}>Name</label>
              <input
                type={"text"}
                placeholder=""
                style={{ border: "none", }}
              />
            </div>
            <br />
            <div className="create-border">
              <label style={{ fontWeight: "300",paddingRight:"14px" }}>Email</label>
              <input
                type={"text"}
                placeholder="Name"
                style={{ border: "none",  }}
              />
            </div>
            
            <div className="create-border">
              <label
              style={{marginRight:"5px"}}>Password</label>
              
              <input
                type={"password"}
                placeholder="******"
                style={{ border: "none", width:"150px" }}
              />
            
            </div>
            <div className="create-border">
              <label
              style={{marginRight:"5px"}}>Password</label>
              
              <input
                type={"password"}
                placeholder="******"
                style={{ border: "none", width:"150px" }}
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
          style={{backgroundColor:"lightgray", border:"none", fontWeight:"400"}}>
              
            <BsGoogle style={{ color: "red",marginRight:"4px" }} />
               Sign up with Google
          </button>
          </div>
          <br></br>
          <div>
            <p style={{ textAlign: "left", fontSize:"12px" }}>
              if you already have an account?
              <span style={{ fontWeight: "300", fontSize:"12px"  }}>
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
