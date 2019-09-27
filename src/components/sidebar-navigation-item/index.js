import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const SidebarItem = ({typeOfMessage}) => {
  const { sidebarItem, sidebarActive } = styles;
  const createDashesBetweenWords = typeOfMessage.trim().split(" ").join("-");
  const folderPath = createDashesBetweenWords;
  /**  
   *  set url by folderPath example:"Inbox, Notifications, Social... => "/", "/notifications", "/social"
   *  in case of "Index type" return "/" as url address
  */
  const setUrl = folderPath === "Inbox" ? "/" : folderPath.toLowerCase();
  return (
    <li className={sidebarItem}>
      <NavLink exact activeClassName={sidebarActive} to={setUrl}>{typeOfMessage}</NavLink>
    </li>
  );
};

export default SidebarItem;
