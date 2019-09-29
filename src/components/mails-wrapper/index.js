import React, { useState, useEffect } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";
import {
  getSortingType,
  getSortingDirection
} from "../../selectors/getSortingType";
import { connect } from "react-redux";
import styles from "./index.module.css";

const MailsContainer = ({ 
  listOfMails, 
  sortingType, 
  sortingDirection,
  messageType 
}) => {
  const { container } = styles;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    sortMessages(sortingType);
  });

  const sortMessages = sortingType => {
    const sortedMessages = listOfMails.sort(compareMessagesBy(sortingType));
    setMessages(sortedMessages);
  };

  const compareMessagesBy = type => {
    const fromNewToOld = sortingDirection;
    const key = type;
    if (fromNewToOld) {
      return function(a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    } else {
      return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }
  };

  return (
    <section className={container}>
      <Toolbar messages={messages} messageType={messageType} />
      <MailsListContainer messages={messages} />
    </section>
  );
};

const mapStateToProps = state => ({
  sortingType: getSortingType(state),
  sortingDirection: getSortingDirection(state)
});

export default connect(
  mapStateToProps,
  null
)(MailsContainer);
