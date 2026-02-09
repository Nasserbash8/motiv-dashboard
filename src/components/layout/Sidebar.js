import React, { useContext } from "react";
import { Link ,useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faXmark,
  faListAlt,
  faRightToBracket,
  faWheelchairMove,
  faShoppingBag,
  faCalendar,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../context/ThemeContext";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ handleClick, isactive }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  console.log(location);
  return (
    <div className={`sidebar ${isactive === true ? "active" : ""} ${theme}`}>
      <i
        className={`close-sidebar d-block d-lg-none ${theme}`}
        onClick={() => handleClick(false)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </i>
      {theme === "dark_mode" ? (
        <img className="logo" src="logo.png" />
      ) : (
        <img className="logo" src="light_logo.png" />
      )}

      <ul className="nav-list list-unstyled " style={{ height: "85%" }}>
        <Link to="/">
          {" "}
          <li className={`nav-item ${theme} ${location.pathname === '/' ? "active" : ""}`}>
            {" "}
            <FontAwesomeIcon className="me-2" icon={faListAlt} />
            <span>Dashboard </span>{" "}
          </li>
        </Link>
        <Link to="/assests">
          {" "}
          <li className={`nav-item ${theme}  ${location.pathname === '/assests' ? "active" : ""}`}>
            {" "}
            <FontAwesomeIcon className="me-2" icon={faWheelchairMove} />
            <span>Assets </span>{" "}
          </li>
        </Link>
        <Link to="/booking">
          {" "}
          <li className={`nav-item ${theme}  ${location.pathname ==='/booking' ? "active" : ""}`}>
            {" "}
            <FontAwesomeIcon className="me-2" icon={faCar} />
            <span>Booking </span>{" "}
          </li>
        </Link>
        <Link to="/sell">
          {" "}
          <li className={`nav-item ${theme}  ${location.pathname ==='/sell' ? "active" : ""}`}>
            {" "}
            <FontAwesomeIcon className="me-2" icon={faShoppingBag} />
            <span>Sell cars </span>{" "}
          </li>
        </Link>
        <Link to="/calender">
          {" "}
          <li className={`nav-item ${theme}  ${location==='/calender' ? "active" : ""}`}>
            {" "}
            <FontAwesomeIcon className="me-2" icon={faCalendar} />
            <span>Calender </span>{" "}
          </li>
        </Link>
        <Link to="/services">
          {" "}
          <li className={`nav-item ${theme}  ${location.pathname ==='/services' ? "active" : ""}`}>
            {" "}
            <FontAwesomeIcon className="me-2 " icon={faWrench} />
            <span>Services </span>{" "}
          </li>
        </Link>
      </ul>
      <ul className="nav-list list-unstyled ">
        <Link to="/sign_in">
          {" "}
          <li className={`nav-item ${theme}`}>
            {" "}
            <FontAwesomeIcon className="me-2 mt-auto" icon={faRightToBracket} />
            <span>Log out </span>{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
