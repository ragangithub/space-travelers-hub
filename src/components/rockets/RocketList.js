import React from 'react';
import PropTypes from 'prop-types';
import RocketItems from './RocketItems';

const RocketList = ({ rockets }) => (
  <>
    <ul className="displayedBooks">
      {rockets.map((rocket) => (
        <RocketItems key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  </>
);

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
      rocketName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,

      reserved: PropTypes.string,
    }),
  ).isRequired,
};

export default RocketList;
