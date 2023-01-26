import React, { useState } from "react";
import "./Dropdown.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

const DropdownMenu = () => {
  const { language, setLanguage } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const changeLanguage = (e) => {
    e.preventDefault();
    setLanguage(!language);
    if (language === "English") setLanguage("عربي");
    if (language === "عربي") setLanguage("English");
  };
  return (
    <div className="dropdown-menu">
      <button
        onClick={(e) => {
          changeLanguage(e);
        }}
      >{`${language}`}</button>
      <button className="dropdown-menu__button" onClick={toggleMenu}>
        {language === "English" ? "القائمة" : "Menu"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="drop-down-button"
            >
              {language === "English" ? "الرئيسية" : "HOME"}
            </button>
          </li>
          <li className="dropdown-menu__item">
            <button
              onClick={() => {
                navigate("/about_en");
              }}
              className="drop-down-button"
            >
              {language === "English" ? "حول" : "ABOUT"}
            </button>
          </li>
          <li className="dropdown-menu__item">
            <button
              onClick={() => {
                navigate("/contact-us_en");
              }}
              className="drop-down-button"
            >
              {language === "English" ? "اتصل بنا" : "CONTACT US"}
            </button>
          </li>
          <li className="dropdown-menu__item">
            <button
              onClick={() => {
                navigate("/privacy-policy_en");
              }}
              className="drop-down-button"
            >
              {language === "English" ? "سياسة الخصوصية" : "PRIVACY POLICY"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
