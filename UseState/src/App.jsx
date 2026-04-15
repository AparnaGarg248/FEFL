// Hook is a pre defined function used to define state variable using use state
import React from "react";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0) // [state variable, setter function]

  function incr() {
    setCount(count + 1)
  }

  return(
    <div>
      <p>{count}</p>
      {/* <p>{count == true ? "true" : "false"}</p> */}
      <button onClick={incr}>+</button>
    </div>
  )
}

export default App