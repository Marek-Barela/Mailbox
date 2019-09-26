import React, { Fragment} from 'react';
import MailsListSortingBar from "../mails-list-sorting-bar";
import MailsList from "../mails-list";

const MailsListContainer = props => {
  return (
    <Fragment>
      <MailsListSortingBar {...props} />
      <MailsList {...props} />
    </Fragment>
  )
}

export default MailsListContainer
