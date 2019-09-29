import React from "react";
import Page404 from "../404";
import { Redirect } from "react-router-dom";
import { getUserMessagesLoadingState } from "../../selectors/getUserMessages";
import { selectMessageAsReaded } from "../../actions/mailsActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const ReadMailContainer = ({location, selectMessageAsReaded, messagesAreLoading}) => {
  const currentState = location.state;
  let id, author, subject, email, messageContent, readed;
  if (currentState !== undefined) {
    id = currentState.id;
    author = currentState.author;
    subject = currentState.subject;
    email = currentState.email;
    messageContent = currentState.messageContent;
    readed = currentState.readed;
  }
  if (!readed && !messagesAreLoading && id !== undefined) {
    selectMessageAsReaded(id)  
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
      {messagesAreLoading && <Redirect to="/" />}
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

const mapStateToProps = state => ({
  messagesAreLoading: getUserMessagesLoadingState(state)
})

const mapDispatchToProps = {
  selectMessageAsReaded
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadMailContainer);
