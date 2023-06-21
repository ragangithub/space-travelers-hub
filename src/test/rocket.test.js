import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import { reserve } from '../redux/rockets/rocketsSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Rockets component', () => {
  let mockDispatch;
  let mockRocketList;
  const mockRocket = {
    id: 1,
    rocketName: 'Falcon 9',
    description: 'Sample description',
    flickrImages: ['https://example.com/image.jpg'],
    reserved: false,
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    mockRocketList = [mockRocket];
    useSelector.mockReturnValue({ rockets: mockRocketList });
  });

  afterEach(() => {
    useSelector.mockReset();
    useDispatch.mockReset();
  });

  it('should render rocket information', () => {
    const { getByText } = render(<Rockets />);
    const image = document.getElementsByClassName('img');
    expect(image).not.toBeNull();
    expect(getByText(mockRocket.rocketName)).toBeInTheDocument();
    expect(getByText(mockRocket.description)).toBeInTheDocument();
    expect(getByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('should handle reservation button click', () => {
    const { getByText } = render(<Rockets />);
    const reserveButton = getByText('Reserve Rocket');

    expect(reserveButton).toBeInTheDocument();

    fireEvent.click(reserveButton);

    expect(mockDispatch).toHaveBeenCalledWith(reserve(mockRocket.id));
  });
});
