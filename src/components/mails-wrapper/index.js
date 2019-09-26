import React, { useState, useEffect } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";
import { connect } from "react-redux";
import styles from "./index.module.css";

const MailsContainer = ({listOfMails, sortingType}) => {
  const { container } = styles;
  const [messages, setMessages] = useState([...listOfMails]);

  useEffect(() => {
    sortMessages(sortingType)
  })

  const sortMessages = (sortingType) => {
    const sortedMessages = listOfMails.sort(compareMessagesBy(sortingType));
    setMessages(sortedMessages);
  }

  const compareMessagesBy = (type) => {
    const fromNewToOld = false
    const key = type;
    if (fromNewToOld) {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }
    } else {
      return function (a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      }
    }
  }

  return (
    <section className={container}>
      <Toolbar messages={messages} />
      <MailsListContainer messages={messages} />
    </section>
  );
};

const mapStateToProps = state => ({
  sortingType: state.sorting.sortedBy
})

export default connect(mapStateToProps, null)(MailsContainer);
