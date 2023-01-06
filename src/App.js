import React from "react"
import './App.css';

function App() {
    const [state, setState]= React.useState(0)
    console.log(state)
    return (
      <div className="counter">
          <button className="counter--minus">–</button>
          <div className="counter--count">
              <h1>{state}</h1>
          </div>
          <button className="counter--plus">+</button>
      </div>
    );
}

export default App;
