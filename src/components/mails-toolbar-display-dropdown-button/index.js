import React, { useState, Fragment } from "react";
import Icon from "../awesome-icon";
import ToolbarOverlay from "../mails-toolbar-overlay";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const MoreDropdown = ({ currentClass, buttonName, dropdownElement }) => {
  const { wrapper } = styles;
  const [switchDropdown, setSwitchDropdown] = useState(false);

  const handleMoveToButtonClick = () => {
    setSwitchDropdown(!switchDropdown);
  };

  const handleOverlayClick = () => {
    setSwitchDropdown(!switchDropdown);
  };

  const indexLevel = switchDropdown ? 100 : 0;

  return (
    <Fragment>
      {switchDropdown && (
        <ToolbarOverlay overlayClick={() => handleOverlayClick()} />
      )}
      <div className={wrapper} style={{ zIndex: indexLevel }}>
        <button
          className={currentClass}
          onClick={() => handleMoveToButtonClick()}
        >
          {buttonName}
          <Icon icon={faCaretDown} />
        </button>
        {switchDropdown && dropdownElement}
      </div>
    </Fragment>
  );
};

export default MoreDropdown;
