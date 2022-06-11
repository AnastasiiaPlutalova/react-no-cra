import { useEffect, useState } from 'react';
import { get, put } from '../../common/utils';

function RedirectPage() {
  const [url, setUrl] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const shortUrl = window.location.href;
        const query = `${process.env.REACT_APP_API_URLS}?shortUrl=${shortUrl}`;
        const { originalUrl, statistic } = await get(query);
        setUrl(originalUrl);
        window.open(originalUrl, '_blank');

        const [today] = new Date(Date.now()).toISOString().split('T');
        const dateIndex = statistic.findIndex((item) => item.date === today);
        if (dateIndex === -1) {
          statistic.push({ date: today, clicks: 0 });
        } else {
          statistic[dateIndex].clicks++;
        }
        await put(`${process.env.REACT_APP_API_URLS}`, { shortUrl, statistic });
      } catch (e) {
        setError(e.message);
      }
    }

    fetchData();
  }, []);

  const loadingMessage = () => 'Loading...';

  const redirectMessage = () => `${url} is opened in a new tab.`;

  return error || (url ? redirectMessage() : loadingMessage());
}

export default RedirectPage;
