import React from "react";
import SortingBarItem from "../mails-list-sorting-bar-item";
import Icon from "../awesome-icon";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { switchAllMailsSelecting } from "../../actions/sortingBarActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const ListSortingBar = ({ messages, switchAllMailsSelecting }) => {
  const { sortingBar, checkbox, favorite, author, subject, date } = styles;
  const checkIfAllMessagesAreSelected = messages.every(
    message => message.isChecked === true
  );
  const handleSwitchAllMessages = e => {
    switchAllMailsSelecting(e.target.checked, messages);
  };

  const activeCheckboxColor = checkIfAllMessagesAreSelected && "#860101";

  return (
    <div className={sortingBar}>
      <div
        className={checkbox}
        style={{ borderBottomColor: activeCheckboxColor }}
      >
        <input
          type="checkbox"
          checked={checkIfAllMessagesAreSelected}
          onChange={e => handleSwitchAllMessages(e)}
          style={{ borderBottomColor: activeCheckboxColor }}
        />
      </div>
      <SortingBarItem
        classType={favorite}
        elementType="isFavorite"
        innerElement={<Icon icon={faStar} />}
      />
      <SortingBarItem
        classType={author}
        elementType="author"
        innerElement={<span>Author</span>}
      />
      <SortingBarItem
        classType={subject}
        elementType="subject"
        innerElement={<span>Subject</span>}
      />
      <SortingBarItem
        classType={date}
        elementType="date"
        innerElement={<span>Date</span>}
      />
    </div>
  );
};

const mapStateToProps = {
  switchAllMailsSelecting
}

export default connect(null, mapStateToProps)(ListSortingBar);
