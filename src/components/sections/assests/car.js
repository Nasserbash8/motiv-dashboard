import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function Car() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`car-detalies  rounded p-3 mb-5 ${theme}`}>
      <div className=" d-flex justify-content-around">
        <div className="p-3 ">
          <span className={theme}>
            <p>Fuel Usage</p>
            <h6>2903.89 Ltr</h6>
          </span>

          <span className={theme}>
            <p>KM Driven</p>
            <h6>2903.89 Ltr</h6>
          </span>
        </div>
        <div className="p-3">
          <span className={theme}>
            <p>KM Driven</p>
            <h6>2903.89 Ltr</h6>
          </span>
          <span className={theme}>
            <p>Top Speed</p>
            <h6>$5.2K</h6>
          </span>
        </div>
      </div>
      <img
        src="car-top-view-2c7169ad4f3f8ddd6bff13b3de4d09e8 1.png"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Car;
