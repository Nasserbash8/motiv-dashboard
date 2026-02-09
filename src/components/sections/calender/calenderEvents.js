import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React, {  useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Bounce } from "react-reveal";

function CalenderEvents() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [content, setContent] = useState("");

  const events = [
    {
      date: "2024-01-01",
      hours: [
        {
          hour: "08.00",
          events: [{ name: "Moto Track Day", description: "All Motorbikes" }],
        },
        {
          hour: "09.00",
          events: [{ name: "Drift Swries Second Round", description: "JDM" }],
        },
        {
          hour: "10.00",
          events: [
            { name: "Moto Track Day", description: "All Motorbikes" },
            { name: "Drift Swries Second Round", description: "JDM" },
          ],
        },
        {
          hour: "11.00",
          events: [{ name: "Moto Track Day", description: "All Motorbikes" }],
        },
        {
          hour: "12.00",
          events: [{ name: "Drift Swries Second Round", description: "JDM" }],
        },
      ],
    },
    {
      date: "2024-01-02",
      hours: [
        {
          hour: "08.00",
          events: [
            { name: "Moto Track Day", description: "All Motorbikes" },
            { name: "Drift Swries Second Round", description: "JDM" },
          ],
        },
        {
          hour: "09.00",
          events: [{ name: "Drift Swries Second Round", description: "JDM" }],
        },
        {
          hour: "10.00",
          events: [{ name: "Moto Track Day", description: "All Motorbikes" }],
        },
        {
          hour: "11.00",
          events: [
            { name: "Moto Track Day", description: "All Motorbikes" },
            { name: "Drift Swries Second Round", description: "JDM" },
          ],
        },
        {
          hour: "12.00",
          events: [{ name: "Drift Swries Second Round", description: "JDM" }],
        },
      ],
    },
  ];
  const [selectedDate, setSelectedDate] = useState("2024-01-01");

  const handlePrevClick = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    setSelectedDate(currentDate.toISOString().split("T")[0]);
  };

  const handleNextClick = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    setSelectedDate(currentDate.toISOString().split("T")[0]);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
  };

  function EventList() {
    const selectedEvents = events.filter(
      (event) => event.date === selectedDate
    );
    if (selectedEvents.length > 0) {
      return (
        <div>
          {selectedEvents.map((event) => {
            return (
              <div key={event.date}>
                {event.hours.map((timeSlot) => {
                  const { hour, events } = timeSlot;

                  return (
                    <div className="d-flex  gap-3 mb-3 px-3  ">
                      <p className="time my-auto">{hour}</p>
                      <div className="d-sm-flex w-100   gap-2">
                        {events.map((event, index) => (
                          <Bounce delay={index * 100}>
                          <div
                            className="event  w-100 px-3 mb-1 py-4"
                            style={{
                              backgroundColor:
                                hour == parseInt("08:00")
                                  ? "#438FFE"
                                  : hour == parseInt("09:00")
                                  ? "#A162F7"
                                  : hour == parseInt("10:00")
                                  ? "#FF6370"
                                  : hour == parseInt("11:00")
                                  ? "#FF764C"
                                  : hour == parseInt("12:00")
                                  ? "#56C57A"
                                  : "",
                            }}
                          >
                            <p className="mb-1">{event.name}</p>
                            <span className="d-flex justify-content-between">
                              <p>{event.description}</p>
                              <span>
                                <img className=" rounded-pill" src="user.png" />
                                <img className=" rounded-pill" src="user.png" />
                                <img className=" rounded-pill" src="user.png" />
                              </span>
                            </span>
                          </div>
                          </Bounce>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h6 className="px-5 text-center ">No Events Today</h6>;
    }
  }
  return (
    <div>
      <div
        className=" p-4 mb-3 events-control d-sm-flex justify-content-between"
        style={{ bordeRadius: "15px" }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DemoItem>
              <DesktopDatePicker
                value={dayjs(selectedDate)}
                onChange={handleDateChange}
                className={` date-input`}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>

        <span className="date-control my-auto ">
          <button onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button onClick={handleNextClick}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </span>
      </div>
      {EventList()}
    </div>
  );
}

export default CalenderEvents;
