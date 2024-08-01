import React from 'react'
// import Quote from './components/Quote'
import { Routes, Route } from 'react-router-dom';
import Snap from './components/Snap';
import Mountain from './components/Mountain';
import Birds from './components/Birds';
import Food from './components/Food';
import Beaches from './components/Beaches';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Snap />} />
      <Route path='/SnapScout/mountain' element={<Mountain />} />
      <Route path='/SnapScout/beaches' element={<Beaches />} />
      <Route path='/SnapScout/birds' element={<Birds />} />
      <Route path='/SnapScout/food' element={<Food />} />
    </Routes>
  );
}

export default App;

