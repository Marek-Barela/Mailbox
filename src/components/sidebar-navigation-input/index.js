import React, { useState } from 'react';
import Icon from "../awesome-icon";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const SidebarNavigationInput = () => {
  const { inputWrapper, input } = styles;

  const [ inputValue, setInputValue ] = useState("")

  const handleInputChange = (e) => {

  }

  return (
    <div className={inputWrapper}>
      <input 
        className={input} 
        placeholder="Folder name" 
        onChange={() => handleInputChange()} 
        value={inputValue}
      />
      <Icon icon={faTimes} title="Cancel" />
      <Icon icon={faCheck} title="Save" />
    </div>
  )
}

export default SidebarNavigationInput;
