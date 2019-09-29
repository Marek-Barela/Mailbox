import React from "react";

const NotFound = () => {
  const container = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "350px",
    userSelect: "none",
  };
  const header = {
    fontSize: "4em"
  };
  return (
    <div style={container}>
      <h1 style={header}>404</h1>
    </div>
  );
};

export default NotFound;
