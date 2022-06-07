import React, { useState } from 'react';
import { UrlForm, UrlsList } from '../../components';
import { getRandomHash } from '../../common/utils';

function FrontPage() {
  const [urls, setUrls] = useState(null);

  const handleFormSubmit = async (originalUrl) => {
    const hash = getRandomHash();
    const urlData = { originalUrl, hash };
    try {
      await fetch('http://localhost:8080/api/urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(urlData),
      });
      setUrls([
        { text: 'shorten URL', url: `/${hash}` },
        { text: 'statistics page', url: `/statistics/${hash}` },
      ]);
    } catch (e) {
      console.log(e);
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
    </>
  );
}

export default FrontPage;
