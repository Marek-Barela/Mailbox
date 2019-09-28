import React, { useState, Fragment } from "react";
import Icon from "../awesome-icon";
import ToolbarOverlay from "../mails-toolbar-overlay";
import MailsToolbarDropdown from "../mails-toolbar-dropdown";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MoveToDropdown = ({ currentClass }) => {
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
      <div style={{ position: "relative", zIndex: indexLevel }}>
        <button
          className={currentClass}
          onClick={() => handleMoveToButtonClick()}
        >
          Move To
          <Icon icon={faCaretDown} />
        </button>
        {switchDropdown && <MailsToolbarDropdown>heyyo</MailsToolbarDropdown>}
      </div>
    </Fragment>
  );
};

export default MoveToDropdown;
