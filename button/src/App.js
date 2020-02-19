import React, { useState } from "react"
import "./App.css"
​
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Likes")
​
  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)
​
    if (count === 0) {
      setName("like")
    } else {
      setName("likes")
    }
  }
​
  return (
    <div>
      <button onClick={updateCount}>
        {count} {name}
      </button>
    </div>
  )
}
​
export default App
