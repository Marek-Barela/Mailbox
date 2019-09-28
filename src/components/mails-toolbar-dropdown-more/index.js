import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import DropdownButtonItem from "../mails-toolbar-dropdown-button";
import {
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  selectReadedMessagesInFolder
} from "../../actions/toolbarActions";
import { connect } from "react-redux";

const MoreDropdown = ({
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  selectReadedMessagesInFolder,
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
      <DropdownButtonItem
        buttonName="Select readed"
        buttonClickAction={() => selectReadedMessagesInFolder(messages)}
      />
    </DropdownWrapper>
  );
};

const mapDispatchToProps = {
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  selectReadedMessagesInFolder
};

export default connect(
  null,
  mapDispatchToProps
)(MoreDropdown);
