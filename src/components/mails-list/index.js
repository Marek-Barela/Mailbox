import React from "react";
import MailsListItem from "../mails-list-item";
import MailsListEmpty from "../mails-list-empty";
import styles from "./index.module.css";

const MailsList = options => {
  const { mails } = styles;
  const { switchCheckbox } = options;
  return (
    <section className={mails}>
      {options.messages.length !== 0 ? (
        options.messages.map(message => {
          // Connect parent methods and message data into one object
          const messageOptions = { message, switchCheckbox }
          return <MailsListItem key={message.id} {...messageOptions} />
        })
      ) : (
        <MailsListEmpty />
      )}
    </section>
  );
};

export default MailsList;
