import React from "react";
import Page404 from "../404";
import styles from "./index.module.css";

const ReadMailContainer = props => {
  const currentState = props.location.state;
  let author, subject, email, messageContent;
  if (currentState !== undefined) {
    author = currentState.author;
    subject = currentState.subject;
    email = currentState.email;
    messageContent = currentState.messageContent;
  }
  const {
    container,
    details,
    messageTitle,
    emailAdressWrapper,
    emailAdressLabel,
    emailAdressText,
    content,
    messageText
  } = styles;
  return currentState !== undefined ? (
    <div className={container}>
      <div className={details}>
        <h2 className={messageTitle}>{subject}</h2>
        <div className={emailAdressWrapper}>
          <div>
            <span className={emailAdressLabel}>From</span>
            <span className={emailAdressText}>
              {author} / {email}
            </span>
          </div>
          <div>
            <span className={emailAdressLabel}>To</span>
            <span className={emailAdressText}>user@mailbox.com</span>
          </div>
        </div>
      </div>
      <div className={content}>
        <p className={messageText}>{messageContent}</p>
      </div>
    </div>
  ) : (
    <Page404 />
  );
};

export default ReadMailContainer;
