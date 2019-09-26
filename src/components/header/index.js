import React from "react";
import styles from "./index.module.css";

const Header = () => {
  const { header, logo } = styles;
  return (
    <header className={header}>
      <div className={logo}>
        <h1>Mailbox</h1>
      </div>
    </header>
  );
};

export default Header;
