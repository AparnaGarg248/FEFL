import React from "react";

function App(){

  function clickHandler(){
    console.log("Click event triggered");
  }

  function mouseOverHandler(){
    console.log("Mouse over event triggered");
  }

  function changeHandler(){
    console.log("On change event triggered");
  }

  function focusHandler(){
    console.log("Focus event triggered");
  }

  return(
    <>
      <button 
        onClick={clickHandler}
        onMouseOver={mouseOverHandler}
      >Click Me</button>

      <input type="text" 
        onChange={changeHandler}
        onFocus={focusHandler}
      ></input>

      <input type="checkbox" 
        onChange={changeHandler}
      ></input>
    </>
  )
}

export default App