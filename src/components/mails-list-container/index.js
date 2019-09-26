import React, { Fragment} from 'react';
import MailsListSortingBar from "../mails-list-sorting-bar";
import MailsList from "../mails-list";

const MailsListContainer = messages => {
  return (
    <Fragment>
      <MailsListSortingBar {...messages} />
      <MailsList {...messages} />
    </Fragment>
  )
}

export default MailsListContainer
