import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    
    console.log(" title:", title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick} type="button">
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
