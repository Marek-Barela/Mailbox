import React from "react";
import Icon from "../awesome-icon";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const index = ({ currentClass }) => {
  return (
    <button className={currentClass}>
      Move To
      <Icon icon={faCaretDown} />
    </button>
  );
};

export default index;
