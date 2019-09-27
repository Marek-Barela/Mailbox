import React from "react";
import Icon from "../awesome-icon";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { sortMailsByType, changeSortingDirection } from "../../actions/sortingBarActions";
import { getSortingType, getSortingDirection } from "../../selectors/getSortingType";
import { connect } from "react-redux";

const SortingBarItem = ({
  classType,
  elementType,
  innerElement,
  sortingType,
  sortingDirection,
  sortMailsByType,
  changeSortingDirection
}) => {

  const handleSortMailsClick = type => {
    if (type === sortingType) {
      sortMailsByType(type);
      changeSortingDirection(!sortingDirection);
    } else {
      sortMailsByType(type);
      changeSortingDirection(true);
    }
  };

  const activeSortingColor = type => sortingType === type && "#860101";

  return (
    <div
      className={classType}
      style={{ borderBottomColor: activeSortingColor(elementType) }}
      onClick={() => handleSortMailsClick(elementType)}
    >
      {innerElement}
      {sortingDirection && sortingType === elementType ? (
        <Icon icon={faSortDown} />
      ) : (
        <Icon icon={faSortUp} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  sortingType: getSortingType(state),
  sortingDirection: getSortingDirection(state)
});

const mapDispatchToProps = {
  sortMailsByType,
  changeSortingDirection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingBarItem);
