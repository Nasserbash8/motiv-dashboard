import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LineAreaChart from "../components/widgets/lineAreaChart";
import { ThemeContext } from "../context/ThemeContext";
import Car from "../components/sections/assests/car";
import Noties from "../components/sections/assests/noties";
import Sensors from "../components/sections/assests/sensors";
import Reminder from "../components/sections/assests/reminder";
function Assests() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="assests">
      <Container fluid className="p-3">
        <h3 className={`title ${theme}`}>Assests</h3>
        <div className="assest-content  d-md-flex p-3 ">
          <Car />

          <div className="detaleis w-100  ms-md-2  ">
            <div className="chart mb-3">
              <LineAreaChart />
            </div>

            <div className=" mb-3">
              <Row>
                <Col xl={6} md={12} sm={6} className="mb-2">
                  <Noties />
                </Col>

                <Col xl={6} md={12} sm={6} className="mb-2">
                  <Sensors />
                </Col>
              </Row>
            </div>
            <Reminder />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Assests;
