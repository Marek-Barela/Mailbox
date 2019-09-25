import React from 'react';
import Toolbar from "../mails-toolbar";

const MailsContainer = (props) => {
  return (
    <section>
      <Toolbar />
      {props}
    </section>
  )
}

export default MailsContainer
