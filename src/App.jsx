import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage, RedirectPage, StatisticPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/:hash" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
