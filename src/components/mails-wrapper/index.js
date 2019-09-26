import React, { useEffect, useState } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";
import styles from "./index.module.css";

const MailsContainer = props => {
  const { container } = styles;
  const [messages, setMessages] = useState([...props]);
  useEffect(() => {}, []);

  const switchCheckbox = (checked, id) => {
    let newArr = [...messages];
    const filterMessageById = newArr.find(message => message.id === id);
    filterMessageById.isChecked = checked;
    setMessages(newArr);
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
