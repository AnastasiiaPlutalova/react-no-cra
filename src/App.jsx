import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, ErrorBoundary } from './components';
import { FrontPage, RedirectPage, StatisticPage } from './pages';

import './common/styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          <Route path="/:hash" element={<RedirectPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
