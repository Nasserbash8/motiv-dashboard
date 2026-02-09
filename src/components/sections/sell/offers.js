import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import {
  faArrowRight,
  faCar,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../context/ThemeContext";
import PieChartWithNeedle from "../../widgets/pieChartWithNeedle";
import SimpleRadialBarChart from "../../widgets/simpleRadialBarChart";

function Offers() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h3 className={`title ${theme} mt-4`}>Offers</h3>
      <div className="offers">
        <div className="offer  p-3">
          <Row>
            <Col xs={6} sm={6} md={4} lg={2} className="my-auto ">
              <div>
                <h6>Killan James</h6>
                <p className="text-muted">
                  <span className="text-danger">$16,605 </span> avarage price
                </p>
                <p>market avarage is $16,224 </p>
                <FontAwesomeIcon
                  className="text-white bg-danger rounded   px-3 icon-offer"
                  icon={faArrowRight}
                />
              </div>
            </Col>

            <Col xs={6} sm={6} md={4} lg={2} className=" my-auto  ">
              <div className="text-center">
                <PieChartWithNeedle />
                
              </div>
            </Col>

            <Col xs={6} sm={6} md={4} lg={2}>
              <div className="text-center ">
                <SimpleRadialBarChart />
              </div>
            </Col>

            <Col xs={6} sm={6} md={4} lg={2} className="my-auto  ">
              <div>
                <FontAwesomeIcon
                  className="text-primary  p-1 icon-offer"
                  icon={faCar}
                />
                <p className="text-primary">$16,605 </p>
                <p>market avarage </p>
              </div>
            </Col>

            <Col xs={6} sm={6} md={4} lg={2} className="my-auto ">
              <div>
                <FontAwesomeIcon
                  className="text-danger  p-1 icon-offer"
                  icon={faArrowRight}
                />
                <p className="text-danger">$16,605 </p>
                <p>market avarage </p>
              </div>
            </Col>

            <Col xs={6} sm={6} md={4} lg={2} className="my-auto">
              <div>
                <FontAwesomeIcon
                  className="text-info  p-1 icon-offer"
                  icon={faDollar}
                />
                <p className="text-info">$16,605 </p>
                <p>market avarage </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Offers;
