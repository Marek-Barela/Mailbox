import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const SidebarItem = ({typeOfMessage}) => {
  const { sidebarItem, sidebarActive } = styles;
  /**  
   *  set url by typeOfMessage example:"Inbox, Notifications, Offers, Social..."
   *  in case of "Index type" return "/" as url address
  */
  const setUrl = typeOfMessage === "Inbox" ? "/" : typeOfMessage.toLowerCase();
  return (
    <li className={sidebarItem}>
      <NavLink exact activeClassName={sidebarActive} to={setUrl}>{typeOfMessage}</NavLink>
    </li>
  );
};

export default SidebarItem;
