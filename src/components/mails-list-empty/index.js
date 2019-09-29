import React from 'react';
import styles from "./index.module.css"

const MailsListEmpty = () => {
  const { emptyFolder } = styles;
  return (
    <div className={emptyFolder}>
      This folder is empty
    </div>
  )
}

export default MailsListEmpty
