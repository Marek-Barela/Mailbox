import React from "react";
import Icon from "../awesome-icon";
import MoveToButton from "../mails-toolbar-move-to";
import MoreButton from "../mails-toolbar-more";
import { changeMailsDirectoryToSpecificType } from "../../actions/toolbarActions";
import { connect } from "react-redux";
import { faTrashAlt, faBan } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Toolbar = ({messages, changeMailsDirectoryToSpecificType}) => {
  const { toolbar, button } = styles;

  const handleSpamButtonCLick = () => {
    changeMailsDirectoryToSpecificType("spam")
  }

  const handleTrashButtonCLick = () => {
    changeMailsDirectoryToSpecificType("trash")
  } 

  const isAnyMailSelected = messages.some(mail => mail.isChecked === true);

  return (
    <div className={toolbar}>
      <button className={button} onClick={() => handleSpamButtonCLick()} disabled={!isAnyMailSelected}>
        <Icon icon={faBan} />
      </button>
      <button className={button} onClick={() => handleTrashButtonCLick()} disabled={!isAnyMailSelected}>
        <Icon icon={faTrashAlt} />
      </button>
      <MoveToButton currentClass={button} />
      <MoreButton currentClass={button} />
    </div>
  );
};

const mapDispatchToProps = {
  changeMailsDirectoryToSpecificType
}

export default connect(null, mapDispatchToProps)(Toolbar);
