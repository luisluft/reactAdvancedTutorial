import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const resetCounter = () => {
    setCounter(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setCounter((previousState) => {
        return previousState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          decrease
        </button>
        <button className="btn" onClick={resetCounter}>
          reset
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
