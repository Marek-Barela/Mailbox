import React from "react";
import styles from "./index.module.css";

const AppContainer = ({ children }) => {
  const { container } = styles;
  return <main className={container}>{children}</main>;
};

export default AppContainer;
