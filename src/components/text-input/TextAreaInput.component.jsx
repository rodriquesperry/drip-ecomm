import React from 'react';

import './TextAreaInput.styles.scss';

const TextAreaInput = ({ label, inputOptions }) => {
  return (
    <div className='textarea'>
      <textarea className='textarea-input' {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default TextAreaInput;
