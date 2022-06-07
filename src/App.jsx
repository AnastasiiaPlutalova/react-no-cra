import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage, RedirectPage, StatisticsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="/:hash" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
