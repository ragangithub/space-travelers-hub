import React from 'react';
import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);
  return (
    <div>
      <MissionList missions={missions} />
    </div>
  );
};

export default Missions;
