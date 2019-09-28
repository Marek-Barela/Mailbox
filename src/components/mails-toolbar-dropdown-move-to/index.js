import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import {
  getBaseMessageTypes,
  getUserMessageTypes
} from "../../selectors/getMessageTypes";
import { changeMailsDirectoryToSpecificType } from "../../actions/toolbarActions";
import createDashesBetweenWords from "../../utils/createDashesBetweenWords";
import { connect } from "react-redux";

const MoveToDropdown = ({ baseMessageTypes, userMessageTypes, changeMailsDirectoryToSpecificType }) => {
  const connectedTypesOfMessages = [...baseMessageTypes, ...userMessageTypes];

  const handleChangeDirectoryButton = type => changeMailsDirectoryToSpecificType(type);

  return (
    <DropdownWrapper>
      {connectedTypesOfMessages.map((typeOfMessage, index) => {
        const convertedTypeOfMessage = createDashesBetweenWords(typeOfMessage).toLowerCase();
        return (
          <button
            key={index}
            onClick={() => handleChangeDirectoryButton(convertedTypeOfMessage)}
          >
            {typeOfMessage}
          </button>
        );
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveToDropdown);
