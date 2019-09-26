import React from 'react'
import styles from "./index.module.css";

const ListSortingBar = () => {
  const { sortingBar } = styles;
  return (
    <div className={sortingBar}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
}

export default ListSortingBar
