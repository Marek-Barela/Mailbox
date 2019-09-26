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

  const switchCheckbox = (checked, id) => {
    console.log({ checked, id });
  };

  const options = {
    messages,
    switchCheckbox
  };

  return (
    <section className={container}>
      <Toolbar {...options} />
      <MailsListContainer {...options} />
    </section>
  );
};

export default MailsContainer;
