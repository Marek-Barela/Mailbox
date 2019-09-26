import React from "react";
import Icon from "../awesome-icon";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const ListSortingBar = () => {
  const { sortingBar, checkbox, favorite, author, subject, date } = styles;
  return (
    <div className={sortingBar}>
      <div className={checkbox}>
        <input type="checkbox" />
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

export default ListSortingBar;
