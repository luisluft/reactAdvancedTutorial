import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("refContainer.current.value :", refContainer.current.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
