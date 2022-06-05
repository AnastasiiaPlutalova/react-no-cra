import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../units';

import './UrlForm.scss';

const r =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
function UrlForm({ handleFormSubmit }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState();

  const handleUrlChange = (event) => {
    const { value } = event.target;
    setUrl(value);

    if (value.search(r) === -1) {
      setError('Please enter correct URL');
    } else {
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const originalUrl = event.target.url.value;
    handleFormSubmit(originalUrl);
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <TextInput
        name="url"
        label="URL"
        placeholder="URL"
        value={url}
        onChange={handleUrlChange}
        error={error}
      />
      <div>
        <input type="submit" value="Shorten URL" />
      </div>
    </form>
  );
}

UrlForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default UrlForm;
