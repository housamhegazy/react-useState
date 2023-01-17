
import './App.css'
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(1);
  const counter = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <div className="card">
        <h2>my number is {count}</h2>
        <button onClick={counter}> increase counter </button>
      </div>
    </div>
  )
}

export default App
