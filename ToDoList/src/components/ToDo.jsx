import React, { useState } from "react";

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  function inputHandler(event) {
    setInputValue(event.target.value);
  }

  function addHandler() {
    // setTaskList(taskList.push(inputValue))
    setTaskList(() => {
      let newArr = [...taskList];
      newArr.push(inputValue);
      setInputValue("")
      return newArr;
    });
  }

  return (
    <div>
      <input 
        type="text"
        onChange={inputHandler}
        // controlled element
        value={inputValue}>
      </input>
      <button onClick={addHandler}>Add</button>
      <ul>
        {taskList.map((v) => {
          return <li>{v}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToDo;
