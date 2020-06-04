import React from 'react';

export default function Contact(props){
  const contact = props.data;

  const date = new Date(contact.admissionDate).toLocaleDateString();
  return (
    <article data-testid="contact" className="contact">
        <img className="contact__avatar" src={contact.avatar} alt={contact.name} />
        <span className="contact__data">{contact.name}</span>
        <span className="contact__data">{contact.phone}</span>
        <span className="contact__data">{contact.country}</span>
        <span className="contact__data">{date}</span>
        <span className="contact__data">{contact.company}</span>
        <span className="contact__data">{contact.department}</span>
      </article>
  );
}
