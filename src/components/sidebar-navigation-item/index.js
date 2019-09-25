import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const SidebarItem = ({typeOfMessage}) => {
  const { sidebarItem } = styles;
  return (
    <li className={sidebarItem}>
      <NavLink to={typeOfMessage.toLowerCase()}>{typeOfMessage}</NavLink>
    </li>
  );
};

export default SidebarItem;
