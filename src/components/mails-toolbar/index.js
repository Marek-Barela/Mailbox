import React from "react";
import styles from "./index.module.css";

const Toolbar = () => {
  const { toolbar, ban, trash, button } = styles;
  return (
    <div className={toolbar}>
      <button className={button}>spam</button>
      <button className={button}>del</button>
      <button className={button}>Move To</button>
      <button className={button}>More</button>
    </div>
  );
};

export default Toolbar;
