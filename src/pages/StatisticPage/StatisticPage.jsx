/* eslint-disable no-new */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { get } from '../../common/utils';

import './StatisticPage.scss';
import DeleteUrl from '../../components/DeleteUrl/DeleteUrl';

const getChartConfig = (data) => ({
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function StatisticPage() {
  const [clicks, setClicks] = useState();
  const [error, setError] = useState();
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteError, setDeleteError] = useState();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const shortUrl = query.get('shortUrl');

  useEffect(() => {
    async function fetchData() {
      try {
        const { statistic } = await get(
          `${process.env.REACT_APP_API_URLS}?shortUrl=${shortUrl}`
        );
        setClicks(statistic);
      } catch (e) {
        setError(e.message || e);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (clicks) {
      const data = {
        labels: clicks.map((item) => item.date),
        datasets: [
          {
            label: `Clicks statistic for ${shortUrl}`,
            data: clicks.map((item) => item.clicks),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
          },
        ],
      };
      const config = getChartConfig(data);
      const ctx = document.getElementById('clicksChart');
      new Chart(ctx, config);
    }
  }, [clicks]);

  const handleFailedDelete = () => {
    setIsDeleted(false);
    setDeleteError('Url was not deleted. Something went wrong.');
  };

  return (
    error || (
      <>
        <canvas className="statistic__canvas" id="clicksChart" />
        <DeleteUrl
          url={shortUrl}
          onSuccess={() => setIsDeleted(true)}
          onFail={handleFailedDelete}
        />
        {isDeleted && <div>URL has been successfully deleted</div>}
        {!isDeleted && deleteError && <div>{deleteError}</div>}
      </>
    )
  );
}

export default StatisticPage;
