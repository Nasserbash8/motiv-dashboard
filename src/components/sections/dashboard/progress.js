import React, { useContext } from "react";

import { Row } from "react-bootstrap";
import {
  faBolt,
  faArrowsAltV,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

import CircleProgress from "../../widgets/circleProgress";
import { ThemeContext } from "../../../context/ThemeContext";

const Progress = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Row className="cards mb-3">
      <CircleProgress value={45} bg={"dark"} title={"Energy"} icon={faBolt} />
      <CircleProgress
        value={15}
        bg={theme}
        title={"Range"}
        color={"#FF7E86"}
        icon={faArrowsAltV}
      />
      <CircleProgress
        value={9}
        bg={theme}
        title={"Break fluid"}
        color={"#A162F7"}
        icon={faDroplet}
      />
      <CircleProgress
        value={25}
        bg={theme}
        title={"Tire Wear"}
        color={"#F6CC0D"}
        icon={faArrowsAltV}
      />
    </Row>
  );
};

export default Progress;
