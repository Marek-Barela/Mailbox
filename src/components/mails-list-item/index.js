import React from 'react';
import styles from "./index.module.css";

const MailsListItem = message => {
  const { author, subject, shortDescription, date, readed } = message;
  const { listElement, checkbox, favorite, authorWrapper, subjectWrapper, messageDate } = styles;
  const fontThickness = readed ? "400" : "800";
  return (
    <article className={listElement}>
      <div className={checkbox}>
        <input type="checkbox" />
      </div>
      <div className={favorite}> 
        {/**ToDo icon */}x
      </div>
      <div className={authorWrapper}>
        <p style={{fontWeight: fontThickness}}>{author}</p>
      </div>
      <div className={subjectWrapper}>
        <h6 style={{fontWeight: fontThickness}}>{subject}</h6>
        <p>{shortDescription}</p>
      </div>
      <div className={messageDate}>
        <p style={{fontWeight: fontThickness}}>{date}</p>
      </div>
    </article>
  )
}

export default MailsListItem
