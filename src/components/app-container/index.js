import React from "react";
import styles from "./index.module.css";

const AppContainer = ({ children }) => {
  const { container } = styles;
  return <div className={container}>{children}</div>;
};

export default AppContainer;
