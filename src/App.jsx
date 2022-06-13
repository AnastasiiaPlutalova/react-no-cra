import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, ErrorBoundary } from './components';
import { FrontPage, RedirectPage, StatisticPage } from './pages';

import './common/styles/styles.scss';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app__content">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/statistic" element={<StatisticPage />} />
            <Route path="/:hash" element={<RedirectPage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
