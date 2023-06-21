import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <>
      <section className="profile_container">

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