import React, { useState } from 'react';
import Icon from "../awesome-icon";
import { getFolderInputBoolean } from "../../selectors/getMessageTypes";
import { switchCreateFolderInputVield, createNewUserFolder } from "../../actions/navbarFoldersActions";
import { connect } from "react-redux";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const SidebarNavigationInput = ({ isFolderInputActive, switchCreateFolderInputVield, createNewUserFolder }) => {
  const { inputFolderWrapper, inputWrapper, input, warning } = styles;
  const [ inputValue, setInputValue ] = useState("");
  const [ inputWarning, setInputWarning ] = useState(false);
  const [ warningMessage, setWarningMessage ] = useState("");

  const handleInputChange = (e) => {
    const maxInputLength = 19;
    setInputValue(e.target.value);

    if(e.target.value.length < maxInputLength) { 
      setInputWarning(false);
      setWarningMessage("")
    }
    else {
      setInputWarning(true)
      setWarningMessage("Folder name is to long")
    }
  }

  const handleSaveClick = () => {
    const input = inputValue.trim();
    if(input.length <= 0 || "") {
      setInputWarning(true)
      setWarningMessage("Folder name is required")
    } else {
      createFolder()
    }
  }

  const createFolder = () => {
    if(!inputWarning) {
      setInputWarning(false)
      setWarningMessage("")
      createNewUserFolder(inputValue)
      switchCreateFolderInputVield(isFolderInputActive)
    } else {
      setInputWarning(true)
    }
  }

  const handleCancelClick = () => {
    switchCreateFolderInputVield(isFolderInputActive)
  }

  const inputWarningStyle = inputWarning && "#ff0000";

  return (
    <div className={inputFolderWrapper}>
      <div className={inputWrapper}>
        {inputWarning && <span className={warning}>{warningMessage}</span>}
        <input 
          className={input} 
          placeholder="Folder name" 
          value={inputValue}
          onChange={(e) => handleInputChange(e)} 
          style={{borderColor: inputWarningStyle}}
        />
      </div>
      <Icon icon={faTimes} title="Cancel" onClick={() => handleCancelClick()} />
      <Icon icon={faCheck} title="Save" onClick={() => handleSaveClick()} />
    </div>
  )
}

const mapStateToProps = state => ({
  isFolderInputActive: getFolderInputBoolean(state)
})

const mapDispatchToProps = {
  switchCreateFolderInputVield,
  createNewUserFolder
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNavigationInput);
