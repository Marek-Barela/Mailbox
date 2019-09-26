import React from 'react'

const MailsListItem = message => {
  const { author } = message;
  return (
    <article>
      {author}
    </article>
  )
}

export default MailsListItem
