import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './components/pages/Home';
import Entry from './components/pages/Entry';
import Dashboard from './components/pages/Dashboard';
import Error404 from './components/pages/Error404';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/index' element={<Home />} />
      <Route path='/signup' element={<Entry />} />
      <Route path='/login' element={<Entry />} />
      <Route path='/admin' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
};