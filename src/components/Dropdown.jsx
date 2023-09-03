import React, { useState } from "react";
import "./Dropdown.css";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";

const DropdownMenu = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
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
        className="langBut"
        onClick={(e) => {
          changeLanguage(e);
        }}
      >{`${language}`}</button>
      <div className="dropdown-menu_container">
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
                  navigate("/about");
                }}
                className="drop-down-button"
              >
                {language === "English" ? "حول" : "ABOUT"}
              </button>
            </li>
            <li className="dropdown-menu__item">
              <button
                onClick={() => {
                  navigate("/contact-us");
                }}
                className="drop-down-button"
              >
                {language === "English" ? "اتصل بنا" : "CONTACT US"}
              </button>
            </li>
            <li className="dropdown-menu__item">
              <button
                onClick={() => {
                  navigate("/privacy-policy");
                }}
                className="drop-down-button"
              >
                {language === "English" ? "سياسة الخصوصية" : "PRIVACY POLICY"}
              </button>
            </li>
          </ul>
        )}
        <p className="dropDownName">
          {language === "عربي"
            ? (window.location.pathname === "/privacy-policy" &&
                "Privacy policy") ||
              (window.location.pathname === "/" && "Home") ||
              (window.location.pathname === "/about" && "About") ||
              (window.location.pathname === "/contact-us" && "Contact us")
            : (window.location.pathname === "/privacy-policy" &&
                "سياسة الخصوصية") ||
              (window.location.pathname === "/" && "الرئيسية") ||
              (window.location.pathname === "/about" && "حول") ||
              (window.location.pathname === "/contact-us" && "اتصل بنا")}
        </p>
      </div>
    </div>
  );
};

export default DropdownMenu;
