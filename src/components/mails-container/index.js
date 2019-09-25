import React from "react";
import MailsWrapper from "../mails-wrapper";
import { Route } from "react-router-dom";
import getMessageTypes from "../../selectors/getMessageTypes";
import { connect } from "react-redux";

const MailsContainer = ({ typesOfMessages }) => {
  const { baseTypesOfMessages, userTypesOfMessages } = typesOfMessages;
  /**
   * Connect both types of messages to create base routes and user routes
   */
  const connectedTypesOfMessages = [
    ...baseTypesOfMessages,
    ...userTypesOfMessages
  ];

  return (
    <main>
      {connectedTypesOfMessages.map((messageType, index) => {
        //Create additionals varables to set "exact" and root url "/" address properly
        const isRootUrl = messageType === "Inbox" ? true : false;
        const getPath = messageType === "Inbox" ? "/" : "/" + messageType;
        return (
          <Route
            key={index}
            path={getPath}
            exact={isRootUrl}
            component={() => MailsWrapper(messageType)}
          />
        );
      })}
    </main>
  );
};

const mapStateToProps = state => ({
  typesOfMessages: getMessageTypes(state)
});

export default connect(
  mapStateToProps,
  null
)(MailsContainer);
