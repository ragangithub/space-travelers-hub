import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Profile from './components/profiles/Profile';
import Rockets from './components/rockets/Rockets';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Rockets />} />

          <Route path="/profiles" element={<Profile />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
