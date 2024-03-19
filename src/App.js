import React from "react";
import Body from "./components/Body";
import { useState } from "react";
import SetTask from "./components/SetTask";
import DisplayTasks from "./components/DisplayTasks";
import EditTask from "./components/EditTask";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const [showTaskBar, setShowTaskBar] = useState(false);
  const [editTaskBar, setEditTaskBar] = useState(false);
  const [userInputValue, setUserInputValue] = useState("");
  
  return (
    <>
      <h1
        style={{
          textTransform: "capitalize",
          textAlign: "center",
          color: "#646681",
          marginTop: "10px",
          fontSize: "3rem",
        }}
      >
        todo list
      </h1>
      <Body showTaskBar={showTaskBar} setShowTaskBar={setShowTaskBar}  />
      {showTaskBar && (
        <SetTask
          taskArray={taskArray}
          setTaskArray={setTaskArray}
          setShowTaskBar={setShowTaskBar}
        />
      )}
      <DisplayTasks taskArray={taskArray} setTaskArray={setTaskArray} setShowTaskBar={setShowTaskBar} showTaskBar={showTaskBar}  editTaskBar={editTaskBar} setEditTaskBar={setEditTaskBar} />
      {editTaskBar && <EditTask 
      editTaskBar={editTaskBar} 
      setEditTaskBar={setEditTaskBar}
      userInputValue={userInputValue}
      setuserInputValue={setUserInputValue}
      taskArray={taskArray}
      setTaskArray={setTaskArray}
      setShowTaskBar={setShowTaskBar}
      showTaskBar={showTaskBar}
       />}
      {/* <EditTask /> */}
    </>
  );
}

export default App;
