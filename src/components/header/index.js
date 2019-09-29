import React from "react";
import Icon from "../awesome-icon";
import { switchSidebarVisibility } from "../../actions/menuButtonAction";
import { getMenuState } from "../../selectors/getMenuState";
import { connect } from "react-redux";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Header = ({sidebarIsVisible, switchSidebarVisibility}) => {
  const { header, logo, menuButton } = styles;

  const handleMenuSwitch = () => {
    switchSidebarVisibility(sidebarIsVisible)
  }

  return (
    <header className={header}>
      <button className={menuButton} onClick={() => handleMenuSwitch()}>
        <Icon icon={faBars} />
      </button>
      <div className={logo}>
        <Icon icon={faReact} />
        <h1>Mailbox</h1>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  sidebarIsVisible: getMenuState(state)
})

const mapDispatchToProps = {
  switchSidebarVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
