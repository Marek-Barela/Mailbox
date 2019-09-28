import React from "react";
import styles from "./index.module.css";

const ToolbarOverlay = ({overlayClick}) => {
  const { overlay } = styles;
  return <div className={overlay} onClick={overlayClick} />;
};

export default ToolbarOverlay;
