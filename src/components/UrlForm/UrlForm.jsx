import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../units';

function UrlForm({ handleFormSubmit, className = '' }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const originalUrl = event.target.url.value;
    handleFormSubmit(originalUrl);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <TextInput name="url" label="URL" placeholder="URL" />
      <div>
        <input type="submit" value="Shorten URL" />
      </div>
    </form>
  );
}

UrlForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default UrlForm;
