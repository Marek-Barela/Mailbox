import React, { useState } from 'react';
import Icon from "../awesome-icon";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const SidebarNavigationInput = () => {
  const { inputFolderWrapper, inputWrapper, input, warning } = styles;

  const [ inputValue, setInputValue ] = useState("");
  const [ inputWarning, setInputWarning ] = useState(false)

  const handleInputChange = (e) => {
    const maxInputLength = 20;
    setInputValue(e.target.value)
    inputValue.length < maxInputLength ? setInputWarning(false) : setInputWarning(true)
  }

  const inputWarningStyle = inputWarning && "#ff0000";

  return (
    <div className={inputFolderWrapper}>
      <div className={inputWrapper}>
        {inputWarning && <span className={warning}>Folder name is to long</span>}
        <input 
          className={input} 
          placeholder="Folder name" 
          onChange={(e) => handleInputChange(e)} 
          value={inputValue}
          style={{borderColor: inputWarningStyle}}
        />
      </div>
      <Icon icon={faTimes} title="Cancel" />
      <Icon icon={faCheck} title="Save" />
    </div>
  )
}

export default SidebarNavigationInput;
