/* eslint-env jest */

import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Missions from '../components/mission/Missions';
import { joinMission } from '../redux/missions/missionSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Missions component', () => {
  let mockDispatch;
  let mockMissions;
  const mockMission = {
    id: 1,
    name: 'Sample Mission',
    description: 'Sample description',
    status: 'Pending',
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    mockMissions = [mockMission];
    useSelector.mockReturnValue({ missions: mockMissions });
  });

  afterEach(() => {
    useSelector.mockReset();
    useDispatch.mockReset();
  });

  it('should dispatch getMissionFromAPI action when missions are empty', () => {
    const { getByText } = render(<Missions />);
    const joinMissionButton = getByText('Join Mission');

    expect(joinMissionButton).toBeInTheDocument();

    fireEvent.click(joinMissionButton);

    expect(mockDispatch).toHaveBeenCalledWith(joinMission(mockMission.id));
  });
});
