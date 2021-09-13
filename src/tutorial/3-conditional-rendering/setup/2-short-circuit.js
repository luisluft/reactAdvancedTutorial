import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("test");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* if statements here will throw error */}
      <h1>OR short circuit: {firstValue}</h1>
      <h1>AND short circuit: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
