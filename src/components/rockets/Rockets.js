import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div>
      <RocketList rockets={rockets} />
    </div>
  );
};

export default Rockets;
