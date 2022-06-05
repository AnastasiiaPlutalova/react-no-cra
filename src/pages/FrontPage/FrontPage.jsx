import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UrlForm, UrlsList } from '../../components';
import { addUrl } from '../../redux/slices/urlsSlice';
import { getRandomHash } from '../../common/utils';

function FrontPage() {
  const dispatch = useDispatch();
  const [urls, setUrls] = useState(null);

  const handleFormSubmit = (originalUrl) => {
    const hash = getRandomHash();
    dispatch(addUrl({ originalUrl, hash }));
    setUrls([
      { text: 'shorten URL', url: `/${hash}` },
      { text: 'statistics page', url: `/statistics/${hash}` },
    ]);
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
