import React, { useContext } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";

function Orders() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="orders ">
      <Row>
        <Col sm={6} md={4}>
          <Card className="p-3 text-center mb-2">
            <div className="order-border">
              <h5 className="">Your order</h5>
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" id="purple" />
                <circle cx="50" cy="50" r="45" id="green" />
                <circle cx="50" cy="50" r="45" id="rose" />
              </svg>

              <div className=" order mx-auto py-4">
                <p>Service Time</p>
                <h5 className="my-auto">5,2h</h5>
              </div>
            </div>
          </Card>
          <Col></Col>
        </Col>

        <Col sm={6} md={7}>
          <Card className=" order-item   mb-2">
            <div className="d-flex justify-content-between p-3 px-4 ">
              <span className="my-auto pt-1 position-relative">
                <span
                  className="circle mx-2  "
                  style={{ background: "#70CF97" }}
                ></span>
                <h6 className={`  ms-2   `}>Brake fluid change</h6>
              </span>
              <span>
                <h6 className="price p-1  px-3 my-auto">$32</h6>
              </span>
            </div>
          </Card>
          <Card className=" order-item   mb-2">
            <div className="d-flex justify-content-between p-3 px-4 ">
              <span className="my-auto pt-1 position-relative">
                <span
                  className="circle mx-2  "
                  style={{ background: "#FF6370" }}
                ></span>
                <h6 className={`  ms-2   `}>Diagnostics</h6>
              </span>
              <span>
                <h6 className="price p-1  px-3 my-auto">$32</h6>
              </span>
            </div>
          </Card>
          <Card className=" order-item   mb-2">
            <div className="d-flex justify-content-between p-3 px-4 ">
              <span className="my-auto pt-1  position-relative">
                <span
                  className="circle mx-2  "
                  style={{ background: "#A162F7" }}
                ></span>
                <h6 className={` ms-2   `}>External Washing</h6>
              </span>
              <span>
                <h6 className="price p-1  px-3 my-auto">$32</h6>
              </span>
            </div>
          </Card>
        </Col>
        <Col sm={11}>
          <button className="w-100 pay">Pay $86</button>
        </Col>
      </Row>
    </div>
  );
}

export default Orders;
