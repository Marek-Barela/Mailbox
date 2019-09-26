import React, { useEffect, useState } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";
import styles from "./index.module.css";

const MailsContainer = props => {
  const { container } = styles;
  const [messages = [], setMessages] = useState();
  useEffect(() => {
    setMessages(props);
  }, [setMessages, props]);

  return (
    <section className={container}>
      <Toolbar messages={messages} />
      <MailsListContainer messages={messages} />
    </section>
  );
};

export default MailsContainer;
