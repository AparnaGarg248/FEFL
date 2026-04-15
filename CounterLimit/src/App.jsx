import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={increment} style={{ margin: "10px" }}>
        +
      </button>

      <button onClick={decrement} style={{ margin: "10px" }}>
        -
      </button>
    </div>
  )
}

export default Counter