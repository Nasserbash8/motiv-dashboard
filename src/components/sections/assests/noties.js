import React, { useContext } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../../context/ThemeContext";
import { Card } from "react-bootstrap";

function Noties() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Card className={`Noties p-2 px-4 rounded ${theme}`}>
      <h3 className="p-2 ">Noties</h3>
      <div className="d-flex ">
        <i className="me-2 ">
          <FontAwesomeIcon icon={faXmark} />
        </i>
        <span>
          <h6>Monday, 6th Apirl 2020</h6>
          <p>Book for General Service</p>
          <p className="Completed p-1 w-75 rounded text-center">Completed</p>
        </span>
      </div>

      <div className="d-flex ">
        <i className="me-2  ">
          <FontAwesomeIcon icon={faXmark} />
        </i>
        <span>
          <h6>Thursday, 24th October 2021</h6>
          <p>Vehicle LV 001 has been marked for recall.</p>
          <p className="not-Completed p-1 w-75 rounded text-center">
            14:07-21/11/2021
          </p>
        </span>
      </div>

      <div className="d-flex ">
        <i className="me-2  ">
          <FontAwesomeIcon icon={faXmark} />
        </i>
        <span>
          <h6>Monday, 13th August 2018</h6>
          <p>Maintenance Completed, Collect</p>
          <p className="not-Completed p-1 w-75 rounded text-center">
            14:07-21/11/2021
          </p>
        </span>
      </div>
    </Card>
  );
}

export default Noties;
