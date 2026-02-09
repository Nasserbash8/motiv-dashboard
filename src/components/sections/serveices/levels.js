import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";

function Levels() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="levels p-2 ">
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3} className="my-auto  p-2">
            <img className="mb-2" src="Ресурс-24.png" />
            <div className="ms-2">
              <h5 className="text-start">Oil Level</h5>
              <span className="d-flex gap-4">
                <p>Engine</p>
                <p>Don’t Replace</p>
              </span>
              <div className="line ">
                <span
                  className="mask-line "
                  style={{ width: "50%", backgroundColor: "#A162F7" }}
                ></span>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3} className="my-auto  p-2">
            <img className="mb-2" src="Frame-64-2.png" />
            <div className="ms-2">
              <h5 className="text-start">Steering</h5>
              <span className="d-flex gap-4">
                <p>Drivetrain</p>
                <p>Need Change</p>
              </span>
              <div className="line ">
                <span
                  className="mask-line "
                  style={{ width: "10%", backgroundColor: "#F6CC0D" }}
                ></span>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3} className="my-auto  p-2">
            <img className="mb-2" src="00090.png" />
            <div className="ms-2">
              <h5 className="text-start">Brake Pads</h5>
              <span className="d-flex gap-4">
                <p>Wheels</p>
                <p>Still Good</p>
              </span>
              <div className="line ">
                <span
                  className="mask-line "
                  style={{ width: "30%", backgroundColor: "#70CF97" }}
                ></span>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3} className="my-auto  p-2 ">
            <img className="mb-2" src="Ресурс-24.png" />
            <div className="ms-2">
              <h5 className="text-start">Oil Level</h5>
              <span className="d-flex gap-4">
                <p>Engine</p>
                <p>Don’t Replace</p>
              </span>
              <div className="line ">
                <span
                  className="mask-line "
                  style={{ width: "85%", backgroundColor: "#FF764C" }}
                ></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Levels;
