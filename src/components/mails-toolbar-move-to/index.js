import React, { useState } from "react";
import Icon from "../awesome-icon";
import MailsToolbarDropdown from "../mails-toolbar-dropdown";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MoveToDropdown = ({ currentClass }) => {
  const [switchDropdown, setSwitchDropdown] = useState(true);

  const handleMoveToButtonClick = () => {
    setSwitchDropdown(!switchDropdown);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        className={currentClass}
        onClick={() => handleMoveToButtonClick()}
      >
        Move To
        <Icon icon={faCaretDown} />
      </button>
      {switchDropdown && <MailsToolbarDropdown>heyyo</MailsToolbarDropdown>}
    </div>
  );
};

export default MoveToDropdown;
