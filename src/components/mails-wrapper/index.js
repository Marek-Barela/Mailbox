import React, { useState } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";
import styles from "./index.module.css";

const MailsContainer = props => {
  const { container } = styles;
  const [messages] = useState([...props]);

  const options = {
    messages
  };

  return (
    <section className={container}>
      <Toolbar {...options} />
      <MailsListContainer {...options} />
    </section>
  );
};

export default MailsContainer;
