import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/profiles/Profile';
import Rockets from './components/rockets/Rockets';
import Navbar from './components/navbar/Navbar';

import Missions from './components/mission/Missions';
import { getRockets } from './redux/rockets/rocketsSlice';
import { getMissions } from './redux/missions/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/mission" element={<Missions />} />
          <Route path="/profiles" element={<Profile />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
