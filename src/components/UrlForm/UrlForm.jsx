import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRandomHash } from '../../common/utils';
import { addUrl } from '../../redux/slices/urlsSlice';
import { TextInput } from '../../units';

import './UrlForm.scss';

const r =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
function UrlForm() {
  const dispatch = useDispatch();
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
    const hash = getRandomHash();
    dispatch(addUrl({ originalUrl, hash }));
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

export default UrlForm;
