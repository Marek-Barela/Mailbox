import React from "react";
import Icon from "../awesome-icon";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Header = () => {
  const { header, logo, menuButton } = styles;
  return (
    <header className={header}>
      <button className={menuButton}>
        <Icon icon={faBars} />
      </button>
      <div className={logo}>
        <Icon icon={faReact} />
        <h1>Mailbox</h1>
      </div>
    </header>
  );
};

export default Header;
