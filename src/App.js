import React from "react"
import './App.css';

function App() {
    const [value, setValue]= React.useState(0)
    function addValue() {
        setValue(prevValue => prevValue + 1)
    }
    function subtractValue() {
      setValue(prevValue => prevValue - 1)
    }
    return (
      <div className="counter">
          <button className="counter--minus" onClick={subtractValue}>–</button>
          <div className="counter--count">
              <h1>{value}</h1>
          </div>
          <button className="counter--plus" onClick={addValue}>+</button>
      </div>
    );
}

export default App;
