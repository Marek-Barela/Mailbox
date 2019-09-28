import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import DropdownButtonItem from "../mails-toolbar-dropdown-button";
import {
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  selectReadedMessagesInFolder,
  unselectAllMailsInFolder
} from "../../actions/toolbarActions";
import { connect } from "react-redux";

const MoreDropdown = ({
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  selectReadedMessagesInFolder,
  unselectAllMailsInFolder,
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
      <DropdownButtonItem
        buttonName="Unselect all"
        buttonClickAction={() => unselectAllMailsInFolder(messages)}
      />
    </DropdownWrapper>
  );
};

const mapDispatchToProps = {
  selectAllMailsInFolder,
  selectUnreadMessagesInFolder,
  selectReadedMessagesInFolder,
  unselectAllMailsInFolder
};

export default connect(
  null,
  mapDispatchToProps
)(MoreDropdown);
