import { useEffect, useState } from 'react';
import { get } from '../../common/utils';

function RedirectPage() {
  const [url, setUrl] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `${process.env.REACT_APP_API_URLS}?shortUrl=${window.location.href}`;
        const { originalUrl } = await get(query);
        setUrl(originalUrl);
        window.open(originalUrl, '_blank');
      } catch (e) {
        setError(e || e.message);
      }
    }

    fetchData();
  }, []);

  const loadingMessage = () => 'Loading...';

  const redirectMessage = () => `${url} is opened in a new tab.`;

  return error || (url ? redirectMessage() : loadingMessage());
}

export default RedirectPage;
