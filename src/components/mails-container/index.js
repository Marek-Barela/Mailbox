import React from "react";
import MailsWrapper from "../mails-wrapper";
import NotFound from "../404";
import { Route, Switch } from "react-router-dom";
import { getMessageTypes } from "../../selectors/getMessageTypes";
import getUserMessages from "../../selectors/getUserMessages";
import { connect } from "react-redux";

const MailsContainer = ({ typesOfMessages, userMessages }) => {
  const { baseTypesOfMessages, userTypesOfMessages } = typesOfMessages;
  /**
   * Connect both types of messages to create base routes and user routes
   */
  const connectedTypesOfMessages = [
    ...baseTypesOfMessages,
    ...userTypesOfMessages
  ];
  return (
    <Switch>
      {connectedTypesOfMessages.map((messageType, index) => {
        //Create additionals varables to set "exact" and root url "/" address properly
        const createDashesBetweenWords = messageType.trim().split(" ").join("-");
        messageType = createDashesBetweenWords;
        const isRootUrl = messageType === "Inbox" ? true : false;
        const getPath = messageType === "Inbox" ? "/" : "/" + messageType;
        const filtredMessages = userMessages.filter(message => {
          return message.typeOfMessage === messageType.toLowerCase();
        });
        return (
          <Route
            key={index}
            path={getPath}
            exact={isRootUrl}
            component={() => <MailsWrapper listOfMails={filtredMessages} />} // Fill mail wrapper with specific type of message
          />
        );
      })}
      <Route component={() => <NotFound />} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  typesOfMessages: getMessageTypes(state),
  userMessages: getUserMessages(state)
});

export default connect(
  mapStateToProps,
  null
)(MailsContainer);
