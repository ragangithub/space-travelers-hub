import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/profile.css';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <>
      <section className="profile_container">
        <section className="reserved_rockets">
          <h2>My Rockets</h2>
          {reservedRockets.length ? (
            <ul className="rockets_container exist">
              {reservedRockets.map((rocket) => (
                <li className="item" key={rocket.id}>
                  <span>{rocket.rocketName}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rockets_container none">
              <p>No rockets reserved</p>
            </div>
          )}
        </section>

        <section className="myMissions">
          <h2 className="sectionTitle">My Missions</h2>
          {joinedMissions.length > 0 ? (
            <ul className="myMissionsList exist">
              {joinedMissions.map((mission) => {
                if (mission.joined) {
                  return (
                    <li className="item" key={mission.id}>
                      {mission.name}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            <div className="myMissionsList none">
              <p>No missions Joined</p>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Profile;
