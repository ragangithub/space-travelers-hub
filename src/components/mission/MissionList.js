import React from 'react';

import PropTypes from 'prop-types';
import MissionItem from './MissionItem';

const MissionList = ({ missions }) => (
  <>
    <div className="missionContainer">
      <table className="missions">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  </>
);

MissionList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      joined: PropTypes.string,
    }),
  ).isRequired,
};

export default MissionList;
