import React from "react";
// import Task from './Task'
// import { useState } from 'react'

const Body = ({ showTaskBar, setShowTaskBar }) => {
  const addTaskBtn = () => {
    setShowTaskBar((prevState) => !prevState);
  };

  return (
    <div style={{ width: "600px", margin: "10px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            backgroundColor: "#646FF0",
            outline: "none",
            cursor: "pointer",
            padding: "15px 30px",
            borderRadius: "5px",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
          }}
          onClick={addTaskBtn}
        >
          {" "}
          Add task
        </button>

        <select
          name="options"
          style={{
            backgroundColor: "#CCCDDE",
            outline: "none",
            cursor: "pointer",
            borderRadius: "5px",
            color: "#585858",
            fontSize: "1rem",
            padding: "7px 30px",
          }}
        >
          <option value="All">All</option>
          <option value="">incomplete</option>
          <option value="">complete</option>
        </select>
      </div>
      <div
        className="todo--container"
        style={{
          backgroundColor: "#ECEDF6",
          height: "100px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <span>no todos</span>
      </div>
    </div>
  );
};

export default Body;
