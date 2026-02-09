import React, { useContext } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import ServiceTimeline from "../components/sections/serveices/timeline";
import Stations from "../components/sections/serveices/stations";
import Orders from "../components/sections/serveices/orders";
import Schedule from "../components/sections/serveices/schedule";
import Levels from "../components/sections/serveices/levels";

function Services() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`services ${theme}`}>
      <Container fluid className="p-3">
        <div className=" mb-3">
          <Row>
            <Col xl={7} sm={12} className="mb-2">
              <Stations />
              <Orders />
            </Col>

            <Col xl={5} sm={12} className="mb-2 timeline">
              <h3 className={`title ${theme}`}>Service Required</h3>
              <Card className="mb-5">
                <ServiceTimeline />
              </Card>

              <Schedule />
            </Col>
          </Row>

          <Levels />
        </div>
      </Container>
    </div>
  );
}

export default Services;
