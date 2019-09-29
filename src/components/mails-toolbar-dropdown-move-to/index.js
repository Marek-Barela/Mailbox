import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import DropdownButtonItem from "../mails-toolbar-dropdown-button";
import { getBaseMessageTypes, getUserMessageTypes } from "../../selectors/getMessageTypes";
import { changeMailsDirectoryToSpecificType } from "../../actions/toolbarActions";
import createDashesBetweenWords from "../../utils/createDashesBetweenWords";
import { connect } from "react-redux";

const MoveToDropdown = ({
  baseMessageTypes,
  userMessageTypes,
  changeMailsDirectoryToSpecificType,
  typeOfFolder
}) => {
  const connectedTypesOfMessages = [...baseMessageTypes, ...userMessageTypes];
  return (
    <DropdownWrapper>
      {connectedTypesOfMessages.map((typeOfMessage, index) => {
        const convertedTypeOfMessage = createDashesBetweenWords(typeOfMessage).toLowerCase();
        /**
         *  Don't render button if user is in exact same route as folder
         *  example: Don't render social button if user is in social route
        */
        const dropdownButton = typeOfFolder !== convertedTypeOfMessage && (
          <DropdownButtonItem
            key={index}
            buttonName={typeOfMessage}
            buttonClickAction={() =>
              changeMailsDirectoryToSpecificType(convertedTypeOfMessage)
            }
          />
        );
        return dropdownButton
      })}
    </DropdownWrapper>
  );
};

const mapStateToProps = state => ({
  baseMessageTypes: getBaseMessageTypes(state),
  userMessageTypes: getUserMessageTypes(state)
});

const mapDispatchToProps = {
  changeMailsDirectoryToSpecificType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveToDropdown);
