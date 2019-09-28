import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import DropdownButtonItem from "../mails-toolbar-dropdown-button";
import { selectAllMailsInFolder } from "../../actions/toolbarActions";
import { connect } from "react-redux";

const MoreDropdown = ({ selectAllMailsInFolder, messages }) => {
  return (
    <DropdownWrapper>
      <DropdownButtonItem
        buttonName="Select all"
        buttonClickAction={() => selectAllMailsInFolder(messages)}
      />
    </DropdownWrapper>
  );
};

const mapDispatchToProps = {
  selectAllMailsInFolder
};

export default connect(
  null,
  mapDispatchToProps
)(MoreDropdown);
