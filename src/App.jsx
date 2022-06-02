import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage, StatisticsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
