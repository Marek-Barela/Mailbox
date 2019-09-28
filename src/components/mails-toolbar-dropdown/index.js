import React from "react";
import styles from "./index.module.css";

const MailsToolbarDropdownWrapper = ({ children }) => {
  const { dropdown } = styles;
  return <div className={dropdown}>{children}</div>;
};

export default MailsToolbarDropdownWrapper;
