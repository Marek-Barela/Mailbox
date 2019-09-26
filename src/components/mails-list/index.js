import React from "react";
import MailsListItem from "../mails-list-item";
import MailsListEmpty from "../mails-list-empty";
import styles from "./index.module.css";

const MailsList = ({ messages }) => {
  const { mails } = styles;
  return (
    <section className={mails}>
      {messages.length !== 0 ? (
        messages.map(message => <MailsListItem key={message.id} {...message} />)
      ) : (
        <MailsListEmpty />
      )}
    </section>
  );
};

export default MailsList;
