import React, { useContext } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import CalenderEvents from "../components/sections/calender/calenderEvents";
import Events from "../components/sections/calender/events";
function Calender() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`calender ${theme}`}>
      <Container fluid className="p-lg-3 p-4">
        <h3 className={`title ${theme} mb-3`}>Calender</h3>
        <div className=" mb-3">
          <Row>
            <Col xl={4} sm={12}>
              <Row>
                <Col xs={12} md={6} xl={12} className="mb-2">
                  <Card className={` p-2 rounded ${theme} `}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["StaticDatePicker"]}>
                        <DemoItem>
                          <StaticDatePicker
                            defaultValue={dayjs("2022-04-17")}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </Card>
                </Col>

                <Col xs={12} md={6} xl={12} className="mb-2">
                  <Events />
                </Col>
              </Row>
            </Col>
            <Col xl={8} sm={12} className="mb-2  chart">
              <Card className={`calender-times    ${theme}`}>
                <CalenderEvents />
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Calender;
