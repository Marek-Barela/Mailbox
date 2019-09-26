import React from "react";
import styles from "./index.module.css";

const ListSortingBar = () => {
  const { sortingBar, checkbox, favorite, author, subject, date } = styles;
  return (
    <div className={sortingBar}>
      <div className={checkbox}>
        <input type="checkbox" />
      </div>
      <div className={favorite}>{/**ToDo icon */}x</div>
      <div className={author}>
        <span>Author</span>
      </div>
      <div className={subject}>
        <span>Subject</span>
      </div>
      <div className={date}>
        <span>Date</span>
      </div>
    </div>
  );
};

export default ListSortingBar;
