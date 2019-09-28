import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import DropdownButtonItem from "../mails-toolbar-dropdown-button";
import {
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder
} from "../../actions/toolbarActions";
import { connect } from "react-redux";

const MoreDropdown = ({
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  messages
}) => {
  return (
    <DropdownWrapper>
      <DropdownButtonItem
        buttonName="Select all"
        buttonClickAction={() => selectAllMailsInFolder(messages)}
      />
      <DropdownButtonItem
        buttonName="Select unread"
        buttonClickAction={() => selectUnreadMessagesInFolder(messages)}
      />
    </DropdownWrapper>
  );
};

const mapDispatchToProps = {
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder
};

export default connect(
  null,
  mapDispatchToProps
)(MoreDropdown);
