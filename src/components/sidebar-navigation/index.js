import React from "react";
import SidebarItem from "../sidebar-navigation-item";
import getMessageTypes from "../../selectors/getMessageTypes";
import { connect } from "react-redux";
import styles from "./index.module.css";

const SidebarNav = ({ typesOfMessages }) => {
  const { sidebar, sidebarNav, sidebarNavFolders, folders, folderText, folderButton } = styles;
  return (
    <aside className={sidebar}>
      <nav className={sidebarNav}>
        <ul className={sidebarNavFolders}>
          {typesOfMessages.baseTypesOfMessages.map((messageType, index) => {
            return <SidebarItem key={index} typeOfMessage={messageType} />;
          })}
        </ul>
        <div className={folders}>
          <span className={folderText}>Folders</span>
          <span className={folderButton} title="Create new folder">+</span>
        </div>
        <ul className={sidebarNavFolders}>
          {typesOfMessages.userTypesOfMessages.map((messageType, index) => {
            return <SidebarItem key={index} typeOfMessage={messageType} />;
          })}
        </ul>
      </nav>
    </aside>
  );
};

const mapStateToProps = state => ({
  typesOfMessages: getMessageTypes(state)
});

export default connect(
  mapStateToProps,
  null
)(SidebarNav);
