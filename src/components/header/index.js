import React from "react";
import Icon from "../awesome-icon";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.css";

const Header = () => {
  const { header, logo } = styles;
  return (
    <header className={header}>
      <div className={logo}>
        <Icon icon={faReact} size="2x" />
        <h1>Mailbox</h1>
      </div>
    </header>
  );
};

export default Header;
