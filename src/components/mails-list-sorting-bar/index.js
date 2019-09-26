import React from "react";
import Icon from "../awesome-icon";
import { switchAllMailsSelecting } from "../../actions/sortingBarActions";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const ListSortingBar = ({ messages, switchAllMailsSelecting }) => {
  const { sortingBar, checkbox, favorite, author, subject, date } = styles;

  const checkIfAllMessagesAreSelected = messages.every(
    message => message.isChecked === true
  );

  const handleSwitchAllMessages = e => {
    switchAllMailsSelecting(e.target.checked, messages);
  };

  return (
    <div className={sortingBar}>
      <div className={checkbox}>
        <input
          type="checkbox"
          checked={checkIfAllMessagesAreSelected}
          onChange={e => handleSwitchAllMessages(e)}
        />
      </div>
      <div className={favorite}>
        <Icon icon={faStar} />
      </div>
      <div className={author}>
        <span>Author</span>
        <Icon icon={faSort} />
      </div>
      <div className={subject}>
        <span>Subject</span>
        <Icon icon={faSort} />
      </div>
      <div className={date}>
        <span>Date</span>
        <Icon icon={faSort} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  switchAllMailsSelecting
};

export default connect(
  null,
  mapDispatchToProps
)(ListSortingBar);
