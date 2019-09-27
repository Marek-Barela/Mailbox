import React, { useState, useEffect } from "react";
import Toolbar from "../mails-toolbar";
import MailsListContainer from "../mails-list-container";
import {
  getSortingType,
  getSortingDirection
} from "../../selectors/getSortingType";
import { getMenuState } from "../../selectors/getMenuState";
import { connect } from "react-redux";
import styles from "./index.module.css";

const MailsContainer = ({ listOfMails, sortingType, sortingDirection, sidebarIsVisible }) => {
  const { container, containerWithMargin } = styles;
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

  const containerStyling = `${containerWithMargin} ${!sidebarIsVisible && container}`

  return (
    <section className={containerStyling}>
      <Toolbar messages={messages} />
      <MailsListContainer messages={messages} />
    </section>
  );
};

const mapStateToProps = state => ({
  sortingType: getSortingType(state),
  sortingDirection: getSortingDirection(state),
  sidebarIsVisible: getMenuState(state)
});

export default connect(
  mapStateToProps,
  null
)(MailsContainer);
