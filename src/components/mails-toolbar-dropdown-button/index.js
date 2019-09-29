import React from 'react'
import styles from './index.module.css';

const DropdownButtonItem = ({buttonName, buttonClickAction}) => {
  const { button } = styles;

  const handleButtonClick = () => {
    buttonClickAction()
  }
  
  return (
    <button
      onClick={() => handleButtonClick()}
      className={button}
    >
      {buttonName}
    </button>
  )
}

export default DropdownButtonItem
