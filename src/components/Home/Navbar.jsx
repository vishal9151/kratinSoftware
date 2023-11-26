import React, { useState, useEffect } from "react";
import { useTodo } from "../../context/userContext";

const Navbar = ({ name }) => {
  const [hour, setHour] = useState(0);
  const [timeString, setTimeString] = useState("");
  const {handleAddHabit}=useTodo();

  useEffect(() => {
    const updateTimeString = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const newTimeString = `${hours}:${minutes}:${seconds}`;
      setHour(hours);
      setTimeString(newTimeString);
    };

    // Update the time string initially
    updateTimeString();

    // Set up an interval to update the time every second (1000 milliseconds)
    const intervalId = setInterval(updateTimeString, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // function for add habit
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    handleAddHabit(habitName);
    alert("Your habit added successfully");
    document.getElementById("habitName").value = "";
  };

  return (
    <>
      <div className="navbar">
        <h3>
          {/* according to time it shows morning, afternoon, evening, and night */}
          {hour <12
            ? "Morning"
            : hour < 17
            ? "Afternoon"
            : hour <21
            ? "Evening"
            : "Night"}
        </h3>
        <h3>{timeString}</h3>
        <div className="right-nav">
          <h5 style={{ marginTop: "10px" }}>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            title="Add a new habit"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
