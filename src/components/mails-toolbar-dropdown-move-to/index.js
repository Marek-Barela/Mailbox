import React from "react";
import DropdownWrapper from "../mails-toolbar-dropdown-wrapper";
import {
  getBaseMessageTypes,
  getUserMessageTypes
} from "../../selectors/getMessageTypes";
import { connect } from "react-redux";

const MoveToDropdown = ({ baseMessageTypes, userMessageTypes }) => {
  console.log({ baseMessageTypes, userMessageTypes });
  return (
    <DropdownWrapper>
      <div>xd</div>
    </DropdownWrapper>
  );
};

const mapStateToProps = state => ({
  baseMessageTypes: getBaseMessageTypes(state),
  userMessageTypes: getUserMessageTypes(state)
});

export default connect(
  mapStateToProps,
  null
)(MoveToDropdown);
