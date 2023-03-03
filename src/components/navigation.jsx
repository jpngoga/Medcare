import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {BsPersonCircle} from 'react-icons/bs'

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
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/hospital">Hospitals</a>
        </li>
        <li>
          <a href="/pharmacy">Pharmacy</a>
        </li>
        <li>
          <a href="/nursary">Nursary</a>
        </li>
        <li>
          <a href="/appointments">Apointments</a>
        </li>
        <li>
          <a href="/profile"><BsPersonCircle/></a>
        </li>
        
      </ul>
      
    </div>
  );
};
