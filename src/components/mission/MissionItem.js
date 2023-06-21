import React from 'react';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missionSlice';
import '../../styles/mission.css';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="mission_name">{mission.name}</td>
      <td className="mission_description">{mission.description}</td>
      <td>
        <div
          className={
            mission.joined ? 'member-badge active-mission' : 'member-badge'
          }
        >
          {mission.joined ? 'Active Member' : 'NOT A MEMBER'}
        </div>
      </td>
      <td>
        <button
          type="button"
          className={`joinBtn  ${mission.joined ? 'hide' : 'show'}`}
          onClick={() => {
            dispatch(joinMission(mission.id));
          }}
        >
          Join Mission
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch(leaveMission(mission.id));
          }}
          className={`leaveBtn  ${mission.joined ? 'show' : 'hide'}`}
        >
          leave mission
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,

    description: PropTypes.string.isRequired,
    joined: PropTypes.string,
  }).isRequired,
};

export default MissionItem;
