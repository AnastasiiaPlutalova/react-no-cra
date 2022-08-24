import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SunSkirts } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SunSkirts />} />
        <Route path="/sun-skirts" element={<SunSkirts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
