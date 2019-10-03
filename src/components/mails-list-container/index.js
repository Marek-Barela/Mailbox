import React, { Fragment} from 'react';
import MailsListSortingBar from "../mails-list-sorting-bar";
import MailsList from "../mails-list";
import LoaderRing from "../loader";
import { getUserMessagesLoadingState } from "../../selectors/getUserMessages";
import { connect } from "react-redux";

const MailsListContainer = props => {
  const { isLoading } = props;
  return (
    <Fragment>
      <MailsListSortingBar {...props} />
      { isLoading ? <LoaderRing /> : <MailsList {...props} /> }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isLoading: getUserMessagesLoadingState(state)
})

export default connect(mapStateToProps, null)(MailsListContainer)
