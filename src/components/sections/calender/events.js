import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Card } from "react-bootstrap";
function Events() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Card className={`events p-2 px-4 rounded ${theme}`}>
      <h3 className="p-2 ">Upcoming Events</h3>
      <div className="d-flex no-event ">
        <p className="time">08:00</p>
      </div>

      <div className="d-flex  gap-3 mb-3">
        <p className="time my-auto">09:00</p>
        <span
          className="event  w-100 px-3 pt-1"
          style={{ backgroundColor: "#8099e9" }}
        >
          <p className="mb-1">Monday, 6th Apirl 2020</p>
          <span className="d-flex justify-content-between">
            <p>Book</p>
            <span>
              <img className=" rounded-pill" src="user.png" />
              <img className=" rounded-pill" src="user.png" />
              <img className=" rounded-pill" src="user.png" />
            </span>
          </span>
        </span>
      </div>

      <div className="d-flex no-event ">
        <p className="time">10:00</p>
      </div>

      <div className="d-flex  gap-3 mb-3">
        <p className="time my-auto">12:00</p>
        <span
          className="event  w-100 px-3 pt-1"
          style={{ backgroundColor: "#A162F7" }}
        >
          <p className="mb-1">Monday, 6th Apirl 2020</p>
          <span className="d-flex justify-content-between">
            <p>Book</p>
            <span>
              <img className=" rounded-pill" src="user.png" />
              <img className=" rounded-pill" src="user.png" />
              <img className=" rounded-pill" src="user.png" />
            </span>
          </span>
        </span>
      </div>
      <div className="d-flex no-event ">
        <p className="time">11:00</p>
      </div>
    </Card>
  );
}

export default Events;
