import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {BsPersonCircle} from "react-icons/bs"


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <br></br>
      <br></br>
      <div className="health-savy-header" style={{ textAlign:"left", position:"absolute", marginRight:"1180px",marginTop:"35px"
       }}>
      <h5 style={{ color: " #43D5CB", }}>Health Savy</h5>

      </div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/">
          <li>
            <a href="/">Home</a>
          </li>
        </NavLink>
        <NavLink to="/hospital">
          <li>
            <a href="">Hospitals</a>
          </li>
        </NavLink>
        <NavLink to="/pharmacy">
          <li>
            <a href="">Pharmacy</a>
          </li>
        </NavLink>
        <NavLink to="/nursary">
          <li>
            <a href="">Nursary</a>
          </li>
        </NavLink>
        <NavLink to="/appointments">
          <li>
            <a href="">Appointments</a>
          </li>
        </NavLink>
        <NavLink to="/profile">
          <li>
            <a href="/"><BsPersonCircle style={{color:"#43D5CB"}}/></a>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
