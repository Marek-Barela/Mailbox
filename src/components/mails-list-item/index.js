import React from 'react';
import styles from "./index.module.css";

const MailsListItem = message => {
  const { author, subject, shortDescription, date } = message;
  const { listElement, checkbox, favorite, authorWrapper, subjectWrapper, messageDate } = styles;
  return (
    <article className={listElement}>
      <div className={checkbox}>
        <input type="checkbox" />
      </div>
      <div className={favorite}> 
        {/**ToDo icon */}
      </div>
      <div className={authorWrapper}>
        <p>{author}</p>
      </div>
      <div className={subjectWrapper}>
        <h6>{subject}</h6>
        <p>{shortDescription}</p>
      </div>
      <div className={messageDate}>
        {date}
      </div>
    </article>
  )
}

export default MailsListItem
