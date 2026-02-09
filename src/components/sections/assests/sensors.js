import React, { useContext } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";
function Sensors() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Card className={`Available-Sensors p-3 rounded ${theme}`}>
      <h3 className="p-2">Available Sensors</h3>
      <Form className="p-2">
        <div key={`default-checkbox}`} className="mb-3">
          <Form.Check
            checked
            className="mb-3"
            type="checkbox"
            label="Asset - Fuel Consumed (10"
            id="1"
          />
          <Form.Check
            className="mb-3"
            type="checkbox"
            id="2"
            label="Asset - Odometer (km)"
          />
          <Form.Check
            className="mb-3"
            type="checkbox"
            id="3"
            label="Asset - Runtime (km)"
          />
          <Form.Check
            className="mb-3"
            type="checkbox"
            id="4"
            label="Asset - Speed (hr)"
          />
          <Form.Check
            className="mb-3"
            type="checkbox"
            id="5"
            label="Engine Temperature (deg C)"
          />
          <Button
            className="p-2"
            style={{ backgroundColor: "#FF6370", border: "none" }}
          >
            See ALL
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default Sensors;
