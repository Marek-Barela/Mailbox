import React, { useState } from "react";
import Icon from "../awesome-icon";
import { getMessageTypes } from "../../selectors/getMessageTypes";
import { createNewUserFolder } from "../../actions/navbarFoldersActions";
import { connect } from "react-redux";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const SidebarNavigationInput = ({ createNewUserFolder, messageTypes }) => {
  const { inputFolderWrapper, inputWrapper, input, warning } = styles;
  const [inputValue, setInputValue] = useState("");
  const [inputWarning, setInputWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleInputChange = e => {
    const maxInputLength = 19;
    setInputValue(e.target.value);

    if (e.target.value.length < maxInputLength) {
      setInputWarning(false);
      setWarningMessage("");
    } else {
      setInputWarning(true);
      setWarningMessage("Folder name is to long");
    }
  };

  const checkIfNameIsEmpty = () => {
    const input = inputValue.trim();
    if (input.length <= 0 || "") {
      setInputWarning(true);
      setWarningMessage("Folder name is required");
      return true;
    } else return false;
  };

  const checkIfNameIsRepeated = () => {
    const isRepeated = messageTypes.userTypesOfMessages.some(
      name => name === inputValue.trim()
    );
    if (isRepeated) {
      setInputWarning(true);
      setWarningMessage("Folder names can't repeat");
      return true;
    } else return false;
  };

  const handleSaveClick = () => {
    const errors = {};
    errors.isEmpty = checkIfNameIsEmpty();
    errors.isRepeated = checkIfNameIsRepeated();
    !errors.isEmpty && !errors.isRepeated && createFolder();
  };

  const createFolder = () => {
    if (!inputWarning) {
      setInputWarning(false);
      setWarningMessage("");
      createNewUserFolder(inputValue.trim());
      setInputValue("");
    } else {
      setInputWarning(true);
    }
  };

  const inputWarningStyle = inputWarning && "#ff0000";

  return (
    <div className={inputFolderWrapper}>
      <div className={inputWrapper}>
        {inputWarning && <span className={warning}>{warningMessage}</span>}
        <input
          className={input}
          placeholder="New folder name"
          value={inputValue}
          onChange={e => handleInputChange(e)}
          style={{ borderColor: inputWarningStyle }}
        />
      </div>
      <Icon icon={faCheck} title="Save" onClick={() => handleSaveClick()} />
    </div>
  );
};

const mapStateToProps = state => ({
  messageTypes: getMessageTypes(state)
});

const mapDispatchToProps = {
  createNewUserFolder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNavigationInput);
