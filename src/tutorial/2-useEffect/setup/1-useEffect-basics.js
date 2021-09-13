import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
let value2 = 0;

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) document.title = `New messages(${value})`;

    if (value > 3) value2 = value2 + 1;

    console.log("runs on every render");
  });

  useEffect(() => {
    console.log("runs only on the initial render");
  }, []);

  useEffect(() => {
    console.log("runs only when value2 is changed");
  }, [value2]);

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
