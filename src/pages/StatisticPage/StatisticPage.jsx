/* eslint-disable no-new */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { get } from '../../common/utils';

import './StatisticPage.scss';
import DeleteUrl from '../../components/DeleteUrl/DeleteUrl';

const getChartConfig = (labels, label, data) => ({
  type: 'bar',
  data: {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  },
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
        setError(e.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (clicks) {
      const labels = clicks.map((item) => item.date);
      const label = `Clicks statistic for ${shortUrl}`;
      const data = clicks.map((item) => item.clicks);

      const config = getChartConfig(labels, label, data);

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
      <div className="statistic-page">
        <canvas className="statistic-page__canvas" id="clicksChart" />
        <DeleteUrl
          url={shortUrl}
          onSuccess={() => setIsDeleted(true)}
          onFail={handleFailedDelete}
        />
        {isDeleted && <div>URL has been successfully deleted</div>}
        {!error && !isDeleted && deleteError && <div>{deleteError}</div>}
      </div>
    )
  );
}

export default StatisticPage;
