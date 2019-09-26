import React, { Fragment} from 'react';
import MailsListSortingBar from "../mails-list-sorting-bar";
import MailsList from "../mails-list";

const MailsListContainer = options => {
  return (
    <Fragment>
      <MailsListSortingBar {...options} />
      <MailsList {...options} />
    </Fragment>
  )
}

export default MailsListContainer
