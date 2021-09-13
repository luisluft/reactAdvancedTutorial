import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("test");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* if statements here will throw error */}
      <h1>OR short circuit: {firstValue}</h1>
      <h1>AND short circuit: {secondValue}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError ? <h1>Error...</h1> : <h1>No errors!</h1>}
    </>
  );
};

export default ShortCircuit;
