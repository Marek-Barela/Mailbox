import React from "react";
import Icon from "../awesome-icon";
import { changeMailsDirectoryToSpecificType } from "../../actions/toolbarActions";
import { connect } from "react-redux";
import {
  faTrashAlt,
  faBan,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Toolbar = ({changeMailsDirectoryToSpecificType}) => {
  const { toolbar, button } = styles;

  const handleSpamButtonCLick = () => {
    changeMailsDirectoryToSpecificType("spam")
  }

  const handleTrashButtonCLick = () => {
    changeMailsDirectoryToSpecificType("trash")
  } 

  return (
    <div className={toolbar}>
      <button className={button} onClick={() => handleSpamButtonCLick()}>
        <Icon icon={faBan} />
      </button>
      <button className={button} onClick={() => handleTrashButtonCLick()}>
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

const mapDispatchToProps = {
  changeMailsDirectoryToSpecificType
}

export default connect(null, mapDispatchToProps)(Toolbar);
