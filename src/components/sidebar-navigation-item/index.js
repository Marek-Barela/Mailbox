import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { unselectMails, resetSortingBar } from "../../actions/sidebarNavigationActions";
import { connect } from "react-redux";

const SidebarItem = ({ typeOfMessage, unselectMails, resetSortingBar, location }) => {
  const { sidebarItem, sidebarItemUnactive, sidebarActive } = styles;
  const createDashesBetweenWords = typeOfMessage.trim().split(" ").join("-");
  const folderPath = createDashesBetweenWords;
  /**
   *  set url by folderPath example:"Inbox, Notifications, Social... => "/", "/notifications", "/social"
   *  in case of "Index type" return "/" as url address
   */
  const setUrl = folderPath === "Inbox" ? "/" : folderPath.toLowerCase();
  const currentPathLocation = location.pathname === "/" ? "/" : location.pathname.slice(1);
  const handleRouteChangeClick = () => {
    if(currentPathLocation !== setUrl) {
      console.log("work")
      unselectMails()
      resetSortingBar()
    }
  }

  return (
    <li className={sidebarItem} onClick={() => handleRouteChangeClick()}>
      <NavLink
        exact
        className={sidebarItemUnactive}
        activeClassName={sidebarActive}
        to={setUrl}
      >
        {typeOfMessage}
      </NavLink>
    </li>
  );
};

const mapDispatchToProps = {
  unselectMails,
  resetSortingBar
}

export default withRouter(connect(null, mapDispatchToProps)(SidebarItem));
