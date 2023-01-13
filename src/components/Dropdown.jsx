import React, { useState } from "react";
import "./Dropdown.css";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="drop-down-button"
            >
              ABOUT
            </button>
          </li>
          <li className="dropdown-menu__item">
            <button className="drop-down-button">CONTACT US</button>
          </li>
          <li className="dropdown-menu__item">
            <button
              onClick={() => {
                navigate("/privacy-policy");
              }}
              className="drop-down-button"
            >
              PRIVACY POLICY
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
