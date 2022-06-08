import React, { useState } from 'react';
import { UrlForm, UrlsList } from '../../components';
import { getRandomHash, post } from '../../common/utils';

function FrontPage() {
  const [urls, setUrls] = useState();
  const [error, setError] = useState();

  const handleFormSubmit = async (originalUrl) => {
    const hash = getRandomHash();
    const urlData = { originalUrl, hash };
    try {
      await post(process.env.REACT_APP_API_URLS, urlData);
      setUrls([
        { text: 'shorten URL', url: `/${hash}` },
        { text: 'statistics page', url: `/statistics/${hash}` },
      ]);
      setError(null);
    } catch {
      setError('Something went wrong');
    }
  };

  return (
    <>
      <UrlForm handleFormSubmit={handleFormSubmit} />
      {urls && (
        <div>
          Result URLs: <UrlsList urls={urls} />
        </div>
      )}
      {error && <div>{error}</div>}
    </>
  );
}

export default FrontPage;
