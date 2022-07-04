import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { contact_id } = useParams();

  return (
    <div>{contact_id}</div>
  )
}

export default Contact;