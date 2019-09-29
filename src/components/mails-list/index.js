import React from "react";
import MailsListItem from "../mails-list-item";
import MailsListEmpty from "../mails-list-empty";
import styles from "./index.module.css";

const MailsList = props => {
  const { mails } = styles;
  return (
    <section className={mails}>
      {props.messages.length !== 0 ? (
        props.messages.map(message => {
          // Connect parent props and message data into one object
          const messageOptions = { message, ...props }
          return <MailsListItem key={message.id} {...messageOptions} />
        })
      ) : (
        <MailsListEmpty />
      )}
    </section>
  );
};

export default MailsList;
