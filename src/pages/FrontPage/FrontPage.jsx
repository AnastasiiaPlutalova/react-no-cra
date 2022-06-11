import React, { useState } from 'react';
import { UrlForm, UrlsList } from '../../components';
import { getRandomHash, isUrl, post } from '../../common/utils';

import './FrontPage.scss';

function FrontPage() {
  const [urls, setUrls] = useState();
  const [error, setError] = useState();

  const handleFormSubmit = async (originalUrl) => {
    if (isUrl(originalUrl)) {
      setError(null);

      const hash = getRandomHash();
      const shortUrl = `${window.location.origin}/${hash}`;
      const statisticUrl = `${window.location.origin}/statistic?shortUrl=${shortUrl}`;
      const urlData = { originalUrl, shortUrl };
      try {
        await post(process.env.REACT_APP_API_URLS, urlData);
        setUrls([
          { text: 'shorten URL', url: shortUrl },
          { text: 'statistic page', url: statisticUrl },
        ]);
      } catch {
        setError('Something went wrong.');
      }
    } else {
      setUrls(null);
      setError('Please enter correct URL.');
    }
  };

  return (
    <div className="front-page">
      <UrlForm
        className="front-page__form"
        handleFormSubmit={handleFormSubmit}
      />
      {urls && (
        <div>
          Result URLs: <UrlsList urls={urls} />
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default FrontPage;
