import React from "react";
import { Container } from "react-bootstrap";
import Progress from "../components/sections/dashboard/progress";
import Cars from "../components/sections/dashboard/cars";
import Charts from "../components/sections/dashboard/charts";

const Dashboard = () => {
  return (
    <div className="Dashboard ">
      <Container fluid className="p-3 ">
        <Progress />
        <Charts />
        <Cars />
      </Container>
    </div>
  );
};

export default Dashboard;
