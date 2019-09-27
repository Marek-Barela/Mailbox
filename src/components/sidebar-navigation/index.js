import React from "react";
import SidebarItem from "../sidebar-navigation-item";
import SidebarNavigationInput from "../sidebar-navigation-input";
import { switchCreateFolderInputVield } from "../../actions/navbarFoldersActions";
import {
  getMessageTypes,
  getFolderInputBoolean
} from "../../selectors/getMessageTypes";
import { getMenuState } from "../../selectors/getMenuState";
import { connect } from "react-redux";
import styles from "./index.module.css";

const SidebarNav = ({
  typesOfMessages,
  isFolderInputActive,
  switchCreateFolderInputVield,
  sidebarIsVisible
}) => {
  const {
    sidebar,
    sidebarHidden,
    sidebarNav,
    sidebarNavFolders,
    folders,
    folderText,
    folderButton
  } = styles;

  const handleCreateFolderButton = () => {
    switchCreateFolderInputVield(isFolderInputActive);
  };

  const sidebarStyling = `${sidebar} ${sidebarIsVisible ? "" : sidebarHidden}`;

  return (
    <aside className={sidebarStyling}>
      <nav className={sidebarNav}>
        <ul className={sidebarNavFolders}>
          {typesOfMessages.baseTypesOfMessages.map((messageType, index) => {
            return <SidebarItem key={index} typeOfMessage={messageType} />;
          })}
        </ul>
        <div className={folders}>
          <span className={folderText}>Folders</span>
          <span
            className={folderButton}
            title="Create new folder"
            onClick={() => handleCreateFolderButton()}
          >
            +
          </span>
        </div>
        {isFolderInputActive && <SidebarNavigationInput />}
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
  typesOfMessages: getMessageTypes(state),
  isFolderInputActive: getFolderInputBoolean(state),
  sidebarIsVisible: getMenuState(state)
});

const mapDispatchToProps = {
  switchCreateFolderInputVield
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);
