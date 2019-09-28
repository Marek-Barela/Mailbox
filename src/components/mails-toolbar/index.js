import React from "react";
import Icon from "../awesome-icon";
import DisplayDropdownButton from "../mails-toolbar-display-dropdown-button";
import MoveToDropdown from "../mails-toolbar-dropdown-move-to";
import MoreDropdown from "../mails-toolbar-dropdown-more";
import { changeMailsDirectoryToSpecificType } from "../../actions/toolbarActions";
import { connect } from "react-redux";
import { faTrashAlt, faBan } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Toolbar = ({ messages, changeMailsDirectoryToSpecificType }) => {
  const { toolbar, button } = styles;

  const handleSpamButtonCLick = () => {
    changeMailsDirectoryToSpecificType("spam");
  };

  const handleTrashButtonCLick = () => {
    changeMailsDirectoryToSpecificType("trash");
  };

  const isAnyMailSelected = messages.some(mail => mail.isChecked === true);

  return (
    <div className={toolbar}>
      <button
        className={button}
        onClick={() => handleSpamButtonCLick()}
        disabled={!isAnyMailSelected}
      >
        <Icon icon={faBan} />
      </button>
      <button
        className={button}
        onClick={() => handleTrashButtonCLick()}
        disabled={!isAnyMailSelected}
      >
        <Icon icon={faTrashAlt} />
      </button>
      <DisplayDropdownButton
        currentClass={button}
        buttonName="Move To"
        dropdownElement={<MoveToDropdown />}
        isDisabled={!isAnyMailSelected}
      />
      <DisplayDropdownButton
        currentClass={button}
        buttonName="More"
        dropdownElement={<MoreDropdown messages={messages} />}
      />
    </div>
  );
};

const mapDispatchToProps = {
  changeMailsDirectoryToSpecificType
};

export default connect(
  null,
  mapDispatchToProps
)(Toolbar);
