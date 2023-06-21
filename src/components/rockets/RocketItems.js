import React from 'react';
import '../../App.css';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve, cancelReserve } from '../../redux/rockets/rocketsSlice';

const RocketItems = ({ rocket }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <img alt="rocket" src={rocket.flickrImages[0]} className="img" />

      <div className="rocket_info">
        <h2>{rocket.rocketName}</h2>
        <div>
          {rocket.reserved && <p className="reserved_sign">Reserved</p>}

          {/* <p className={`reserved_sign ${rocket.reserved ? "show" : "hide"}`}>
            Reserved
          </p> */}
          <p>{rocket.description}</p>
        </div>
        <button
          type="button"
          className={`reserve ${rocket.reserved ? 'hide' : 'show'}`}
          onClick={() => {
            dispatch(reserve(rocket.id));
          }}
        >
          Reserve Rocket
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(cancelReserve(rocket.id));
          }}
          className={`cancel  ${rocket.reserved ? 'show' : 'hide'}`}
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  );
};

RocketItems.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.string,
  }).isRequired,
};

export default RocketItems;
