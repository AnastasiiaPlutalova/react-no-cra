import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RedirectPage() {
  const { hash } = useParams();
  const [url, setUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8080/api/urls/${hash}`, {
        method: 'GET',
      });
      const { originalUrl } = await response.json();
      setUrl(originalUrl);
      window.open(originalUrl, '_blank');
    }

    fetchData();
  }, []);

  const loadingMessage = () => 'Loading...';

  const redirectMessage = () => `${url} is opened in a new tab.`;

  return url ? redirectMessage() : loadingMessage();
}

export default RedirectPage;
