import React from "react";
import Icon from "../awesome-icon";
import {
  switchAllMailsSelecting,
  sortMailsByType,
  changeSortingDirection
} from "../../actions/sortingBarActions";
import {
  getSortingType,
  getSortingDirection
} from "../../selectors/getSortingType";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const ListSortingBar = ({
  messages,
  switchAllMailsSelecting,
  sortMailsByType,
  sortingType,
  sortingDirection,
  changeSortingDirection
}) => {
  const { sortingBar, checkbox, favorite, author, subject, date } = styles;
  const checkIfAllMessagesAreSelected = messages.every(
    message => message.isChecked === true
  );
  const handleSwitchAllMessages = e => {
    switchAllMailsSelecting(e.target.checked, messages);
  };

  const handleSortMailsClick = type => {
    if (type === sortingType) {
      sortMailsByType(type);
      changeSortingDirection(!sortingDirection);
    } else {
      sortMailsByType(type);
      changeSortingDirection(true);
    }
  };

  const activeCheckboxColor = checkIfAllMessagesAreSelected && "#860101";
  const activeSortingColor = type => sortingType === type && "#860101";

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
      <div
        className={favorite}
        style={{ borderBottomColor: activeSortingColor("isFavorite") }}
        onClick={() => handleSortMailsClick("isFavorite")}
      >
        <Icon icon={faStar} />
        {sortingDirection && sortingType === "isFavorite" ? <Icon icon={faSortDown} /> : <Icon icon={faSortUp}/>}
      </div>
      <div
        className={author}
        style={{ borderBottomColor: activeSortingColor("author") }}
        onClick={() => handleSortMailsClick("author")}
      >
        <span>Author</span>
        {sortingDirection && sortingType === "author" ? <Icon icon={faSortDown} /> : <Icon icon={faSortUp} />}
      </div>
      <div
        className={subject}
        style={{ borderBottomColor: activeSortingColor("subject") }}
        onClick={() => handleSortMailsClick("subject")}
      >
        <span>Subject</span>
        {sortingDirection && sortingType === "subject" ? <Icon icon={faSortDown} /> : <Icon icon={faSortUp} /> }
      </div>
      <div
        className={date}
        style={{ borderBottomColor: activeSortingColor("date") }}
        onClick={() => handleSortMailsClick("date")}
      >
        <span>Date</span>
        {sortingDirection && sortingType === "date" ?  <Icon icon={faSortDown} /> : <Icon icon={faSortUp} /> }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  sortingType: getSortingType(state),
  sortingDirection: getSortingDirection(state)
});

const mapDispatchToProps = {
  switchAllMailsSelecting,
  sortMailsByType,
  changeSortingDirection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSortingBar);
