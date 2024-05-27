import React, { useState } from "react";
import { Fragment } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <div className="container">
        <span className="number"> 숫자 : {count}</span>
        <button className="plus" onClick={Plus}>
          +
        </button>
        <button className="minus" onClick={minus}>
          -
        </button>
        <button className="reset" onClick={reset}>
          reset
        </button>
      </div>
    </Fragment>
  );
}

export default App;
