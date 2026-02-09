import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";
import { faBolt, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-reveal";
function Cars() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="cars-card ">
      <Row>
        <Col sm className="mb-3 text-white ">
          <Fade>
              <Card className={`p-2 ${theme}`}>
                <Card.Body>
                  <span className="d-flex justify-content-between">
                    <h6 className="subtitle">
                      <img src="Vector.svg" />
                      64% Recommend
                    </h6>
                    <i className="add-to-wishlist">
                      {" "}
                      <FontAwesomeIcon className="me-1" />
                    </i>
                  </span>

                  <Card.Img className="mb-2" src="car.png" />
                  <Card.Title>Mini Cooper</Card.Title>

                  <div className="d-flex justify-content-between mt-3 ">
                    <span className=" d-flex icons">
                      <i className="">
                        <FontAwesomeIcon className="me-1" icon={faRetweet} />
                      </i>
                      <p className="me-1">130K</p>
                      <img className="me-1" src="plus.svg" />
                      <i className="">
                        <FontAwesomeIcon className="me-1" icon={faBolt} />
                      </i>
                    </span>
                    <h6 className="price">$32/h</h6>
                  </div>
                </Card.Body>
              </Card>      
          </Fade>
        </Col>

        <Col sm className="mb-3 text-white">
          <Fade delay={200}>
              <Card className={`p-2 ${theme}`} style={{ background: "#E3ECF1" }}>
                <Card.Body>
                  <span className="d-flex justify-content-between">
                    <h6 className="subtitle">
                      <img src="Vector.svg" /> 74% Recommend
                    </h6>
                    <i className="add-to-wishlist">
                      {" "}
                      <FontAwesomeIcon className="me-1" />
                    </i>
                  </span>

                  <Card.Img
                    className="mb-2"
                    src="maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.png"
                  />
                  <Card.Title>Porsche 911 Carrera</Card.Title>

                  <div className="d-flex justify-content-between mt-3 ">
                    <span className=" d-flex icons">
                      <i className="">
                        <FontAwesomeIcon className="me-1" icon={faRetweet} />
                      </i>
                      <p className="me-1">130K</p>
                      <img className="me-1" src="plus.svg" />
                      <i className="">
                        <FontAwesomeIcon className="me-1" icon={faBolt} />
                      </i>
                    </span>
                    <h6 className="price">$28/h</h6>
                  </div>
                </Card.Body>
              </Card>
          </Fade>
        </Col>
        <Col sm className="mb-3 text-white">
        <Fade delay={300}>
          <Card className={`p-2 ${theme}`}>
            <Card.Body>
              <span className="d-flex justify-content-between">
                <h6 className="subtitle">
                  <img src="Vector.svg" /> 74% Recommend
                </h6>
                <i className="add-to-wishlist">
                  {" "}
                  <FontAwesomeIcon className="me-1" />
                </i>
              </span>

              <Card.Img
                className="mb-2"
                src="mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png"
              />
              <Card.Title>Porsche 911 Carrera</Card.Title>

              <div className="d-flex justify-content-between mt-3 ">
                <span className=" d-flex icons">
                  <i className="">
                    <FontAwesomeIcon className="me-1" icon={faRetweet} />
                  </i>
                  <p className="me-1">130K</p>
                  <img className="me-1" src="plus.svg" />
                  <i className="">
                    <FontAwesomeIcon className="me-1" icon={faBolt} />
                  </i>
                </span>
                <h6 className="price">$28/h</h6>
              </div>
            </Card.Body>
          </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}

export default Cars;
