import React, { useContext } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import StackBarChart from "../components/widgets/stackBarChart";
import Offers from "../components/sections/sell/offers";
function Sell() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`sell ${theme}`}>
      <Container fluid className="p-3">
        <h3 className={`title ${theme}`}>Sell Cars</h3>
        <div className=" mb-3">
          <Row>
            <Col xl={7} sm={12} className="mb-2">
              <Card className={` p-2 rounded ${theme}`}>
                <h3 className="p-2 ">2022 Mercedes Benz </h3>
                {theme === "dark_mode" ? (
                  <img className="w-100 h-100" src="Framedark.svg" />
                ) : (
                  <img className="w-100 h-100" src="Frame 82.svg" />
                )}
              </Card>
            </Col>

            <Col xl={5} sm={12} className="mb-2 chart">
              <StackBarChart />
            </Col>
          </Row>
                                    
          <Offers />
        </div>
      </Container>
    </div>
  );
}

export default Sell;
