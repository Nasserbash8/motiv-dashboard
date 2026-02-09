import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";
import { Fade } from "react-reveal";
function Stations() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h3 className={`title ${theme} mb-3 `}>Service Station</h3>
      <div className="stations mb-4">
        <div className="station   ">
          <Row className=" mb-2">
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade>
                <div className=" item p-3 rounded">A1</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={100}>
                <div className=" item p-3 rounded">A2</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={200}>
                <div className=" item p-3 rounded">A3</div>
              </Fade>
            </Col>

            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={300}>
                <div
                  className=" item p-3 rounded"
                  style={{ background: "#FF6370" }}
                >
                  A4
                </div>
              </Fade>
            </Col>

            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={400}>
                <div className=" item p-3 rounded">A5</div>
              </Fade>
            </Col>

            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={500}>
                <div className=" item p-3 rounded">A6</div>
              </Fade>
            </Col>

            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={600}>
                <div className=" item p-3 rounded">A7</div>
              </Fade>
            </Col>

            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={700}>
                <div className=" item p-3 rounded">A8</div>
              </Fade>
            </Col>

            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={800}>
                <div
                  className=" item p-3 rounded"
                  style={{ background: "#FF6370" }}
                >
                  A9
                </div>
              </Fade>
            </Col>
          </Row>
          <Row className="">
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade>
                <div
                  className=" item p-3 rounded"
                  style={{ background: "#FF6370" }}
                >
                  B1
                </div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={100}>
                <div className=" item p-3 rounded">B2</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={200}>
                <div className=" item p-3 rounded">B3</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={300}>
                <div className=" item p-3 rounded">B4</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={400}>
                <div className=" item p-3 rounded">B5</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={500}>
                <div
                  className=" item p-3 rounded"
                  style={{ background: "#FF6370" }}
                >
                  B6
                </div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={600}>
                <div className=" item p-3 rounded">B7</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={700}>
                <div className=" item p-3 rounded">B8</div>
              </Fade>
            </Col>
            <Col xs={2} sm={1} className="mx-1 mb-2">
              <Fade delay={800}>
                <div
                  className=" item p-3 rounded"
                  style={{ background: "#A162F7" }}
                >
                  B9
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Stations;
