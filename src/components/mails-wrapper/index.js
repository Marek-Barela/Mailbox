import React, { useEffect, useState } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";

const MailsContainer = props => {
  const [messages, setMessages] = useState();
  useEffect(() => {
    setMessages(props);
  }, [setMessages]);

  return (
    <section>
      <Toolbar messages={messages} />
      <MailsListContainer messages={messages} />
    </section>
  );
};

export default MailsContainer;
