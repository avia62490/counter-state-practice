import React from "react"
import Count from './Count.js'
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
          <Count number={value} />
          <button className="counter--plus" onClick={addValue}>+</button>
      </div>
    );
}

export default App;
