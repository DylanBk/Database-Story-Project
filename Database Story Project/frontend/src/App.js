import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/index' element={<Home />} />
      <Route path='/admin' element={<Dashboard />}/>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
};