import React from "react";
import Icon from "../awesome-icon";
import {
  faTrashAlt,
  faBan,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Toolbar = () => {
  const { toolbar, button } = styles;
  return (
    <div className={toolbar}>
      <button className={button}>
        <Icon icon={faBan} />
      </button>
      <button className={button}>
        <Icon icon={faTrashAlt} />
      </button>
      <button className={button}>
        Move To
        <Icon icon={faCaretDown} />
      </button>
      <button className={button}>
        More
        <Icon icon={faCaretDown} />
      </button>
    </div>
  );
};

export default Toolbar;
