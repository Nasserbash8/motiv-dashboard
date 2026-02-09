import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";
function ServiceTimeline() {
  return (
    <div className="timeline-container pt-4">
      <Timeline>
        <Fade>
        <TimelineItem>
          <TimelineSeparator>
            <FontAwesomeIcon
              className=" p-2 rounded-pill"
              icon={faUser}
              style={{
                backgroundColor: "#39564d",
                color: "#70CF97",
                fontSize: "1.2em",
              }}
            />
            <TimelineConnector
              className="my-2"
              style={{ backgroundColor: "#70CF97", width: "3px" }}
            />
          </TimelineSeparator>
          <TimelineContent className="timeline-content w-100 pt-1">
            <div>
              <h6 className="mb-2">Center Care</h6>
              <div className="timeline-details d-flex justify-content-between ">
                <p>Price: $48</p>

                <p>Processing: 1 hour</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        </Fade>

        <Fade delay={100}>
        <TimelineItem>
          <TimelineSeparator>
            <FontAwesomeIcon
              className=" p-2 rounded-pill"
              icon={faScrewdriverWrench}
              style={{
                backgroundColor: "#a162f730",
                color: "#A162F7",
                fontSize: "1.2em",
              }}
            />
            <TimelineConnector
              className="my-2"
              style={{ backgroundColor: "#A162F7", width: "3px" }}
            />
          </TimelineSeparator>
          <TimelineContent className="timeline-content w-100 pt-1">
            <div>
              <h6 className="mb-2">service icon</h6>
              <div className="timeline-details d-flex justify-content-between ">
                <p>Price: $78</p>

                <p>Processing: 2 hour</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        </Fade>

        <Fade delay={200}>
        <TimelineItem>
          <TimelineSeparator>
            <FontAwesomeIcon
              className=" p-2 rounded-pill"
              icon={faTruck}
              style={{
                backgroundColor: "#64414a",
                color: "#FF6370",
                fontSize: "1.2em",
              }}
            />
          </TimelineSeparator>
          <TimelineContent className="timeline-content w-100 pt-1">
            <div>
              <h6 className="mb-2">service icon</h6>
              <div className="timeline-details d-flex justify-content-between ">
                <p>Price: $78</p>

                <p>Processing: 1 hour</p>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        </Fade>
      </Timeline>
    </div>
  );
}

export default ServiceTimeline;
