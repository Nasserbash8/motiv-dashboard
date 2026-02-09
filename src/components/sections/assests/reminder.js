import React, { useState, useContext } from "react";
import { Button, Table } from "react-bootstrap";
import Addform from "../../widgets/addform";
import { ThemeContext } from "../../../context/ThemeContext";

function Reminder() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeform, setactiveform] = useState();
  const openForm = (active) => {
    setactiveform(active);
  };
  const [addReminder, setaddReminder] = useState({
    Description: "",
    Notify: "",
    Overdue: "",
    Due: "",
  });
  const [allreminder, setallreminder] = useState([]);
  const addnewreminder = (e) => {
    setaddReminder({ ...addReminder, [e.target.name]: e.target.value });
  };
  const handelSubmit = (event) => {
    setallreminder([...allreminder, addReminder]);
    event.preventDefault();
  };
  return (
    <>
      <div className={`Reminder rounded p-3 ${theme}`}>
        <span className="d-flex justify-content-between mb-3 ">
          <h3>Reminder</h3>
          <Button onClick={() => openForm(true)}>Add new</Button>
        </span>

        <div className="overflow-auto">
          <Table className={theme}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Due</th>
                <th>Overdue</th>
                <th>Notify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Urgent Safety Recall</td>
                <td>2022-04-06</td>
                <td>2022-04-08</td>
                <td>David Demo</td>
              </tr>
              <tr>
                <td>Urgent Safety Recall</td>
                <td>2022-04-06</td>
                <td>2022-04-08</td>
                <td>David Demo</td>
              </tr>
              {allreminder.map((data) => {
                return (
                  <tr>
                    <td>{data.Description}</td>
                    <td>{data.Due}</td>
                    <td>{data.Overdue}</td>
                    <td>{data.Notify}</td>
                    <td>{data.Status}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

      <Addform
        activeform={activeform}
        allreminder={allreminder}
        handelSubmit={handelSubmit}
        addnewreminder={addnewreminder}
        openForm={openForm}
      />
    </>
  );
}

export default Reminder;
