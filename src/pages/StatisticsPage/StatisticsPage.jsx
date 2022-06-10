/* eslint-disable no-new */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';

import './StatisticsPage.scss';

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

const clicksData = [
  { date: '2022-06-01', clicks: 2 },
  { date: '2022-06-02', clicks: 6 },
  { date: '2022-06-03', clicks: 10 },
];

function StatisticsPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const data = {
    labels: clicksData.map((item) => item.date),
    datasets: [
      {
        label: `Clicks statistic for ${query.get('shortUrl')}`,
        data: clicksData.map((item) => item.clicks),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const config = getChartConfig(data);
    const ctx = document.getElementById('clicksChart');
    new Chart(ctx, config);
  });

  return <canvas className="statistics__canvas" id="clicksChart" />;
}

export default StatisticsPage;
