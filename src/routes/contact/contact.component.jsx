import React from 'react';

import ContactForm from '../../components/contact-form/contactForm.component';

import './contact.styles.scss';

const Contact = () => {
  return (
    <>
      <div className='contact-header'>
        <h2>Contact US</h2>
        <p>
          Let's get this conversation started! <br /> We are here to answer any
          of your questions. <br /> Fill in your information below and someone <br/>
          will contact you shortly.
        </p>
      </div>
      <div className='contact-container'>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
