import React, { useState } from 'react';

import FormInput from '../formInput/form-input.component';
import TextAreaInput from '../text-input/TextAreaInput.component';
import Buttton from '../button/button.component';

import './contactForm.styles.scss';

const defaultFormFields = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFormFields();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='contact-form-container'>
        <FormInput
          label='Name'
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'name',
            value: name,
          }}
        />
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />
        <TextAreaInput
          label='Message'
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'message',
            value: message,
            rows: 8,
            cols: 50,
          }}
        />
        <Buttton>Submit</Buttton>
      </div>
    </form>
  );
};

export default ContactForm;
