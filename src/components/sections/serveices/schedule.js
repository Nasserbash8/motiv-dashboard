import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
function Schedule() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h3 className={`title ${theme} mb-4`}>Service Schedule</h3>
      <div className="mb-3">
        <h5 className="mb-4">Upgrade your favorite car periodically</h5>

        <span className="d-flex gap-5 position-relative">
          <span
            className="circle mx-2 bg "
            style={{
              background: "#A162F7",
              width: "15px",
              height: "15px",
              top: "3px",
            }}
          ></span>
          <h6 className="ms-4 ">Today, 10.00</h6>
          <h6>Fix Price : $1,200</h6>
        </span>
      </div>
    </>
  );
}

export default Schedule;
