import React from "react";
import styles from "./index.module.css";

const Header = () => {
  const { header } = styles;
  return <header className={header}>Mailbox</header>;
};

export default Header;
