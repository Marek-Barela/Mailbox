import React from 'react';
import Toolbar from "../mails-toolbar";

const MailsContainer = (props) => {
  console.log(props)
  return (
    <section>
      <Toolbar />
      {props.map(item => {
        return <div>{item.email}</div>
      })}
    </section>
  )
}

export default MailsContainer
